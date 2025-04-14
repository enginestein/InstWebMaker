import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { Label } from '@/components/ui/label';

interface TextareaProps {
  element: Element;
  index?: number;
}

export function Textarea({ element, index }: TextareaProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get textarea style
  const containerStyle = {
    marginBottom: element.style?.marginBottom || '1rem',
  };
  
  const textareaStyle = {
    ...element.style,
    padding: element.style?.padding || '0.5rem',
    border: element.style?.border || '1px solid hsl(var(--muted))',
    borderRadius: element.style?.borderRadius || '0.25rem',
    width: element.style?.width || '100%',
    minHeight: element.style?.height || '100px',
  };
  
  return (
    <div
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses}`}
      style={containerStyle}
    >
      {element.label && (
        <Label className="block text-sm font-medium mb-1">{element.label}</Label>
      )}
      <textarea
        placeholder={element.placeholder || 'Enter text here...'}
        rows={element.rows || 4}
        className={`${element.className || ''}`}
        style={textareaStyle}
        onClick={(e) => e.stopPropagation()} // Prevent selecting when clicking the textarea itself
        readOnly // Make it read-only in builder mode
      >
        {element.content}
      </textarea>
    </div>
  );
}
