import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { Label } from '@/components/ui/label';

interface InputProps {
  element: Element;
  index?: number;
}

export function Input({ element, index }: InputProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get input style
  const containerStyle = {
    marginBottom: element.style?.marginBottom || '1rem',
  };
  
  const inputStyle = {
    ...element.style,
    padding: element.style?.padding || '0.5rem',
    border: element.style?.border || '1px solid hsl(var(--muted))',
    borderRadius: element.style?.borderRadius || '0.25rem',
    width: element.style?.width || '100%',
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
      <input
        type={element.attributes?.type || 'text'}
        placeholder={element.placeholder || 'Input text'}
        className={`${element.className || ''}`}
        style={inputStyle}
        onClick={(e) => e.stopPropagation()} // Prevent selecting when clicking the input itself
        readOnly // Make it read-only in builder mode
      />
    </div>
  );
}
