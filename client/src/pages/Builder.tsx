import { useBuilder } from '@/context/BuilderContext';
import { Toolbar } from '@/components/layout/Toolbar';
import { LeftPanel } from '@/components/layout/LeftPanel';
import { Canvas } from '@/components/layout/Canvas';
import { RightPanel } from '@/components/layout/RightPanel';
import { StatusBar } from '@/components/layout/StatusBar';
import { useEffect, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

export default function Builder() {
  const { 
    selectedElement, 
    updateElement,
    undo,
    redo,
    canUndo,
    canRedo,
    clearSelection
  } = useBuilder();

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent handling during input or textarea focus
    const activeElement = document.activeElement;
    const isInputActive = activeElement?.tagName === 'INPUT' || 
                          activeElement?.tagName === 'TEXTAREA' ||
                          activeElement?.getAttribute('contenteditable') === 'true';
    
    if (isInputActive) return;
    
    // Undo/Redo
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      if (e.shiftKey) {
        // Ctrl/Cmd + Shift + Z = Redo
        if (canRedo) {
          e.preventDefault();
          redo();
          toast({
            title: "Redo",
            description: "Action restored",
            duration: 1000
          });
        }
      } else {
        // Ctrl/Cmd + Z = Undo
        if (canUndo) {
          e.preventDefault();
          undo();
          toast({
            title: "Undo",
            description: "Action reversed",
            duration: 1000
          });
        }
      }
    }
    
    // Delete selected element with Delete or Backspace key
    if ((e.key === 'Delete' || e.key === 'Backspace') && selectedElement) {
      if (!isInputActive) {
        e.preventDefault();
        // Create a delete action here - update element to remove it or call removeElement
      }
    }
    
    // Escape to deselect
    if (e.key === 'Escape') {
      clearSelection();
    }
    
    // Arrow keys to nudge selected element
    if (selectedElement && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      // Only if not in input/editing mode
      if (!isInputActive) {
        e.preventDefault();
        
        const shift = e.shiftKey ? 10 : 1; // Larger increments with shift
        
        // Calculate new position
        const currentTop = parseInt(String(selectedElement.style?.top || '0').replace('px', '')) || 0;
        const currentLeft = parseInt(String(selectedElement.style?.left || '0').replace('px', '')) || 0;
        
        switch (e.key) {
          case 'ArrowUp':
            updateElement(selectedElement.id, {
              style: { ...selectedElement.style, top: `${currentTop - shift}px` }
            });
            break;
          case 'ArrowDown':
            updateElement(selectedElement.id, {
              style: { ...selectedElement.style, top: `${currentTop + shift}px` }
            });
            break;
          case 'ArrowLeft':
            updateElement(selectedElement.id, {
              style: { ...selectedElement.style, left: `${currentLeft - shift}px` }
            });
            break;
          case 'ArrowRight':
            updateElement(selectedElement.id, {
              style: { ...selectedElement.style, left: `${currentLeft + shift}px` }
            });
            break;
        }
      }
    }
  }, [selectedElement, canUndo, canRedo, undo, redo, updateElement, clearSelection]);
  
  // Register keyboard shortcuts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Toolbar />
      
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </div>
      
      <StatusBar />
    </div>
  );
}
