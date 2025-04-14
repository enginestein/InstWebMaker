import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { renderElement } from '@/lib/elementsLibrary';
import { useBuilder } from '@/context/BuilderContext';

interface ColumnProps {
  element: Element;
  index?: number;
}

export function Column({ element, index }: ColumnProps) {
  const { isDragging } = useBuilder();
  const {
    ref,
    isOver,
    canDrop,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get column style
  const style = {
    ...element.style,
    flex: element.style?.flex || '0 0 50%',
    padding: element.style?.padding || '0 0.5rem',
    marginBottom: element.style?.marginBottom || '1rem',
  };
  
  return (
    <div
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={style}
    >
      {/* Render children elements */}
      {element.children?.map((child, childIndex) => 
        renderElement(child, childIndex)
      )}
      
      {/* Drop indicator when dragging over empty column */}
      {isOver && canDrop && isDragging && (!element.children || element.children.length === 0) && (
        <div className="drop-indicator w-full h-16 flex items-center justify-center">
          <span className="text-primary">Drop element here</span>
        </div>
      )}
    </div>
  );
}
