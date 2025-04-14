import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';

interface ButtonProps {
  element: Element;
  index?: number;
}

export function Button({ element, index }: ButtonProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get button style
  const style = {
    ...element.style,
    backgroundColor: element.style?.backgroundColor || 'hsl(var(--primary))',
    color: element.style?.color || 'white',
    padding: element.style?.padding || '0.5rem 1.5rem',
    borderRadius: element.style?.borderRadius || '0.25rem',
    border: element.style?.border || 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'background-color 0.2s ease-out',
  };
  
  return (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault(); // Prevent button from submitting when in builder
        handleSelect(e);
      }}
      className={`${dragDropClasses} ${element.className || ''} hover:opacity-90`}
      style={style}
    >
      {element.content || 'Button'}
    </button>
  );
}
