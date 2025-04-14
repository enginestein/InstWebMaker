import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { renderElement } from '@/lib/elementsLibrary';
import { useBuilder } from '@/context/BuilderContext';

interface FormProps {
  element: Element;
  index?: number;
}

export function Form({ element, index }: FormProps) {
  const { isDragging } = useBuilder();
  const {
    ref,
    isOver,
    canDrop,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get form style
  const style = {
    ...element.style,
    border: element.style?.border || '1px solid hsl(var(--muted))',
    padding: element.style?.padding || '1rem',
    borderRadius: element.style?.borderRadius || '0.375rem',
    marginBottom: element.style?.marginBottom || '1rem',
  };
  
  return (
    <form
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={style}
      onSubmit={(e) => e.preventDefault()} // Prevent form from submitting
    >
      {/* Render children elements */}
      {element.children?.map((child, childIndex) => 
        renderElement(child, childIndex)
      )}
      
      {/* Drop indicator when dragging over empty form */}
      {isOver && canDrop && isDragging && (!element.children || element.children.length === 0) && (
        <div className="drop-indicator w-full h-16 flex items-center justify-center">
          <span className="text-primary">Drop element here</span>
        </div>
      )}
    </form>
  );
}
