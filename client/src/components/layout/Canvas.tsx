import { useDrop } from 'react-dnd';
import { useBuilder } from '@/context/BuilderContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { renderElement } from '@/lib/elementsLibrary';

export function Canvas() {
  const { 
    canvas, 
    addElement, 
    device, 
    showGrid, 
    clearSelection,
    isDragging,
    isPreviewMode
  } = useBuilder();
  
  // Set up drop target for canvas root
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'element',
    drop: (item: any, monitor) => {
      if (monitor.didDrop()) {
        return; // Don't handle if a child already handled it
      }
      
      // If item has no ID, it's a new element to add
      if (!item.id) {
        addElement(item);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver({ shallow: true }),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  
  // Get canvas width based on device type
  const getCanvasWidth = () => {
    switch (device) {
      case 'mobile':
        return 375;
      case 'tablet':
        return 768;
      case 'desktop':
      default:
        return 1000;
    }
  };
  
  // Handle click on canvas background to clear selection
  const handleCanvasClick = (e: React.MouseEvent) => {
    // Only clear if clicked directly on canvas, not on an element
    if (e.target === e.currentTarget) {
      clearSelection();
    }
  };
  
  return (
    <div className="flex-1 overflow-auto bg-muted p-8">
      <ScrollArea className="h-full">
        <div 
          className={`mx-auto shadow-sm rounded-md transition-all duration-300 ${isPreviewMode ? '' : 'bg-background'}`}
          style={{ width: getCanvasWidth(), minHeight: 600 }}
        >
          {/* Canvas with grid background */}
          <div 
            ref={drop}
            className={`${showGrid && !isPreviewMode ? 'canvas-grid' : ''} w-full h-full relative p-4`}
            onClick={handleCanvasClick}
          >
            {/* Render canvas children */}
            {canvas.children.map((element, index) => renderElement(element, index))}
            
            {/* Drop indicator when dragging over empty canvas */}
            {isOver && canDrop && isDragging && canvas.children.length === 0 && (
              <div className="drop-indicator w-full h-16 flex items-center justify-center">
                <span className="text-primary">Drop element here</span>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
