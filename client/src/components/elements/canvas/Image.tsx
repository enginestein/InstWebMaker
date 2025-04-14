import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { Image as ImageIcon } from 'lucide-react';

interface ImageProps {
  element: Element;
  index?: number;
}

export function Image({ element, index }: ImageProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get image style
  const style = {
    ...element.style,
    width: element.style?.width || '100%',
    height: element.style?.height || 'auto',
    objectFit: element.style?.objectFit || 'contain',
    marginBottom: element.style?.marginBottom || '1rem',
    borderRadius: element.style?.borderRadius || '0',
  };
  
  // If no src, show placeholder
  if (!element.src) {
    return (
      <div
        ref={ref}
        onClick={handleSelect}
        className={`${dragDropClasses} ${element.className || ''} bg-muted rounded flex items-center justify-center p-6`}
        style={{
          ...style,
          height: element.style?.height || '160px',
        }}
      >
        <ImageIcon className="h-6 w-6 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Drop Image Here</span>
      </div>
    );
  }
  
  return (
    <img
      ref={ref}
      onClick={handleSelect}
      src={element.src}
      alt={element.alt || 'Image'}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={style}
    />
  );
}
