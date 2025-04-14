import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';

interface TextProps {
  element: Element;
  index?: number;
}

export function Text({ element, index }: TextProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get text style
  const style = {
    ...element.style,
    fontSize: element.style?.fontSize || '1rem',
    marginBottom: element.style?.marginBottom || '1rem',
    color: element.style?.color || 'inherit',
    textAlign: element.style?.textAlign || 'left',
  };
  
  return (
    <p
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={style}
    >
      {element.content || 'Text paragraph'}
    </p>
  );
}
