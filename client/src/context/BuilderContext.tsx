import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Canvas, Element, DeviceType, BuilderHistory, ElementType } from '@/components/elements/ElementTypes';
import { generateId } from '@/lib/utils';
import { useUndo } from '@/hooks/useUndo';
import { toast } from '@/hooks/use-toast';

interface BuilderContextType {
  canvas: Canvas;
  selectedElement: Element | null;
  device: DeviceType;
  showGrid: boolean;
  isDragging: boolean;
  isPreviewMode: boolean;
  isExportModalOpen: boolean;
  
  // Actions
  addElement: (element: Omit<Element, 'id'>, targetId?: string) => void;
  removeElement: (id: string) => void;
  updateElement: (id: string, updates: Partial<Element>) => void;
  selectElement: (id: string | null) => void;
  moveElement: (id: string, targetId: string, position?: number) => void;
  setDevice: (device: DeviceType) => void;
  toggleGrid: () => void;
  setIsDragging: (dragging: boolean) => void;
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  clearSelection: () => void;
  clearCanvas: () => void;
  setPreviewMode: (isPreview: boolean) => void;
  toggleExportModal: () => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

const initialCanvas: Canvas = {
  id: 'canvas',
  width: 1000,
  height: 600,
  children: [],
};

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [canvas, setCanvas] = useState<Canvas>(initialCanvas);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  
  const { history, currentIndex, addToHistory, canUndo, canRedo, navigateHistory } = useUndo<Canvas>(initialCanvas);

  // Add new element to canvas or specific container
  const addElement = useCallback((element: Omit<Element, 'id'>, targetId?: string) => {
    const newElement = { ...element, id: generateId() };
    
    setCanvas(prevCanvas => {
      const newCanvas = { ...prevCanvas };
      
      // Helper function to find target and add element to it
      const addToTarget = (items: Element[]): Element[] => {
        return items.map(item => {
          if (item.id === targetId) {
            return {
              ...item,
              children: [...(item.children || []), newElement]
            };
          }
          
          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: addToTarget(item.children)
            };
          }
          
          return item;
        });
      };
      
      // If targetId is provided, add to that target, otherwise add to canvas root
      if (targetId) {
        newCanvas.children = addToTarget(newCanvas.children);
      } else {
        newCanvas.children = [...newCanvas.children, newElement];
      }
      
      return newCanvas;
    });
    
    toast({
      title: "Element Added",
      description: `New ${element.type} element has been added`,
      duration: 1000
    });
    
    // Add to history
    addToHistory();
  }, [addToHistory]);

  // Remove element by id
  const removeElement = useCallback((id: string) => {
    setCanvas(prevCanvas => {
      const newCanvas = { ...prevCanvas };
      
      // Helper function to remove element
      const filterItems = (items: Element[]): Element[] => {
        return items
          .filter(item => item.id !== id)
          .map(item => {
            if (item.children && item.children.length > 0) {
              return {
                ...item,
                children: filterItems(item.children)
              };
            }
            return item;
          });
      };
      
      newCanvas.children = filterItems(newCanvas.children);
      return newCanvas;
    });
    
    // If we're removing the currently selected element, clear selection
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
    
    toast({
      title: "Element Removed",
      duration: 1000
    });
    
    // Add to history
    addToHistory();
  }, [selectedElement, addToHistory]);

  // Update an element's properties
  const updateElement = useCallback((id: string, updates: Partial<Element>) => {
    setCanvas(prevCanvas => {
      const newCanvas = { ...prevCanvas };
      
      // Helper function to update element
      const updateItems = (items: Element[]): Element[] => {
        return items.map(item => {
          if (item.id === id) {
            return { ...item, ...updates };
          }
          
          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: updateItems(item.children)
            };
          }
          
          return item;
        });
      };
      
      newCanvas.children = updateItems(newCanvas.children);
      return newCanvas;
    });
    
    // Update selected element if that's the one we're updating
    if (selectedElement?.id === id) {
      setSelectedElement(prev => prev ? { ...prev, ...updates } : null);
    }
    
    // Add to history for significant changes, but not for every small update
    if (updates.type || updates.content || updates.style?.width || updates.style?.height) {
      addToHistory();
    }
  }, [selectedElement, addToHistory]);

  // Select an element
  const selectElement = useCallback((id: string | null) => {
    if (!id) {
      setSelectedElement(null);
      return;
    }
    
    // Helper function to find element
    const findElement = (items: Element[]): Element | null => {
      for (const item of items) {
        if (item.id === id) {
          return item;
        }
        
        if (item.children && item.children.length > 0) {
          const found = findElement(item.children);
          if (found) return found;
        }
      }
      
      return null;
    };
    
    const element = findElement(canvas.children);
    setSelectedElement(element);
  }, [canvas]);

  // Move an element to a new parent
  const moveElement = useCallback((id: string, targetId: string, position?: number) => {
    setCanvas(prevCanvas => {
      const newCanvas = { ...prevCanvas };
      let elementToMove: Element | null = null;
      
      // Helper function to remove element and save it
      const removeAndGetElement = (items: Element[]): Element[] => {
        const index = items.findIndex(item => item.id === id);
        
        if (index !== -1) {
          elementToMove = items[index];
          return [...items.slice(0, index), ...items.slice(index + 1)];
        }
        
        return items.map(item => {
          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: removeAndGetElement(item.children)
            };
          }
          return item;
        });
      };
      
      // Helper function to add element to target
      const addToTarget = (items: Element[]): Element[] => {
        return items.map(item => {
          if (item.id === targetId && elementToMove) {
            const newChildren = [...(item.children || [])];
            
            if (typeof position === 'number') {
              newChildren.splice(position, 0, elementToMove);
            } else {
              newChildren.push(elementToMove);
            }
            
            return {
              ...item,
              children: newChildren
            };
          }
          
          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: addToTarget(item.children)
            };
          }
          
          return item;
        });
      };
      
      // First remove the element and get a reference to it
      newCanvas.children = removeAndGetElement(newCanvas.children);
      
      // Check if the target is the canvas itself
      if (targetId === 'canvas' && elementToMove) {
        if (typeof position === 'number') {
          newCanvas.children.splice(position, 0, elementToMove);
        } else {
          newCanvas.children.push(elementToMove);
        }
      } else {
        // Otherwise add it to the target element
        newCanvas.children = addToTarget(newCanvas.children);
      }
      
      return newCanvas;
    });
    
    // Add to history
    addToHistory();
  }, [addToHistory]);

  // Toggle grid visibility
  const toggleGrid = useCallback(() => {
    setShowGrid(prev => !prev);
  }, []);

  // Clear all elements from canvas
  const clearCanvas = useCallback(() => {
    setCanvas(prevCanvas => ({
      ...prevCanvas,
      children: []
    }));
    setSelectedElement(null);
    
    toast({
      title: "Canvas Cleared",
      description: "All elements have been removed.",
    });
    
    // Add to history
    addToHistory();
  }, [addToHistory]);

  // Clear current selection
  const clearSelection = useCallback(() => {
    setSelectedElement(null);
  }, []);

  // Toggle export modal
  const toggleExportModal = useCallback(() => {
    setIsExportModalOpen(prev => !prev);
  }, []);
  
  // Set preview mode
  const setPreviewMode = useCallback((isPreview: boolean) => {
    setIsPreviewMode(isPreview);
  }, []);

  // Undo/Redo operations
  const undo = useCallback(() => {
    const prevState = navigateHistory(-1);
    if (prevState) {
      setCanvas(prevState);
      // Clear selection when undoing, to avoid stale references
      setSelectedElement(null);
    }
  }, [navigateHistory]);

  const redo = useCallback(() => {
    const nextState = navigateHistory(1);
    if (nextState) {
      setCanvas(nextState);
      // Clear selection when redoing, to avoid stale references
      setSelectedElement(null);
    }
  }, [navigateHistory]);

  // Save canvas state to history when it changes significantly
  useEffect(() => {
    // History is managed by addToHistory calls in the actions
  }, [canvas]);

  return (
    <BuilderContext.Provider
      value={{
        canvas,
        selectedElement,
        device,
        showGrid,
        isDragging,
        isPreviewMode,
        isExportModalOpen,
        addElement,
        removeElement,
        updateElement,
        selectElement,
        moveElement,
        setDevice,
        toggleGrid,
        setIsDragging,
        canUndo,
        canRedo,
        undo,
        redo,
        clearSelection,
        clearCanvas,
        setPreviewMode,
        toggleExportModal
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  
  if (context === undefined) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  
  return context;
};
