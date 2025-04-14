import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { renderElement } from '@/lib/elementsLibrary';
import { useBuilder } from '@/context/BuilderContext';

interface ContainerProps {
  element: Element;
  index?: number;
}

export function Container({ element, index }: ContainerProps) {
  const { isDragging } = useBuilder();
  const {
    ref,
    isOver,
    canDrop,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get container style
  const style = {
    ...element.style,
    border: element.style?.border || '1px dashed hsl(var(--muted))',
    padding: element.style?.padding || '1rem',
    marginBottom: element.style?.marginBottom || '1rem',
    backgroundColor: element.style?.backgroundColor || 'white',
    width: element.style?.width || '100%',
  };
  
  return (
    <div
      ref={ref}
      onClick={handleSelect}
      className={`relative ${dragDropClasses} ${element.className || ''}`}
      style={style}
    >
      {/* Resize handles shown when selected */}
      {isSelected && (
        <>
          <div className="resize-handle handle-n"></div>
          <div className="resize-handle handle-e"></div>
          <div className="resize-handle handle-s"></div>
          <div className="resize-handle handle-w"></div>
          <div className="resize-handle handle-nw"></div>
          <div className="resize-handle handle-ne"></div>
          <div className="resize-handle handle-se"></div>
          <div className="resize-handle handle-sw"></div>
        </>
      )}
      
      {/* Render children elements */}
      {element.children?.map((child, childIndex) => 
        renderElement(child, childIndex)
      )}
      
      {/* Drop indicator when dragging over container */}
      {isOver && canDrop && isDragging && (!element.children || element.children.length === 0) && (
        <div className="drop-indicator w-full h-16 flex items-center justify-center">
          <span className="text-primary">Drop element here</span>
        </div>
      )}
    </div>
  );
}
