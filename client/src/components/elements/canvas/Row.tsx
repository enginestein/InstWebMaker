import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { renderElement } from '@/lib/elementsLibrary';
import { useBuilder } from '@/context/BuilderContext';

interface RowProps {
  element: Element;
  index?: number;
}

export function Row({ element, index }: RowProps) {
  const { isDragging } = useBuilder();
  const {
    ref,
    isOver,
    canDrop,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get row style
  const style = {
    ...element.style,
    display: 'flex',
    flexWrap: element.style?.flexWrap || 'wrap',
    marginLeft: element.style?.marginLeft || '-0.5rem',
    marginRight: element.style?.marginRight || '-0.5rem',
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
      
      {/* Drop indicator when dragging over empty row */}
      {isOver && canDrop && isDragging && (!element.children || element.children.length === 0) && (
        <div className="drop-indicator w-full h-16 flex items-center justify-center">
          <span className="text-primary">Drop element here</span>
        </div>
      )}
    </div>
  );
}
