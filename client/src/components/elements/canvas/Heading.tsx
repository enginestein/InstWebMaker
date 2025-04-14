import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';

interface HeadingProps {
  element: Element;
  index?: number;
}

export function Heading({ element, index }: HeadingProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get heading style
  const style = {
    ...element.style,
    fontSize: element.style?.fontSize || '1.5rem',
    fontWeight: element.style?.fontWeight || 'bold',
    marginBottom: element.style?.marginBottom || '1rem',
    color: element.style?.color || 'inherit',
    textAlign: element.style?.textAlign || 'left',
  };
  
  // Choose heading level based on fontSize
  const HeadingTag = getHeadingLevel(element.style?.fontSize);
  
  return (
    <HeadingTag
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={style}
    >
      {element.content || 'Heading Text'}
    </HeadingTag>
  );
}

// Helper to determine heading level
function getHeadingLevel(fontSize?: string | number): keyof JSX.IntrinsicElements {
  if (!fontSize) return 'h2';
  
  const size = typeof fontSize === 'string' 
    ? parseInt(fontSize) 
    : fontSize;
  
  if (size >= 36) return 'h1';
  if (size >= 24) return 'h2';
  if (size >= 20) return 'h3';
  if (size >= 18) return 'h4';
  if (size >= 16) return 'h5';
  return 'h6';
}
