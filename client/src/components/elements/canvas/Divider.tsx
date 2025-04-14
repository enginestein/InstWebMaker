import { Element } from '@/components/elements/ElementTypes';
import { useDragDrop } from '@/hooks/useDragDrop';
import { Separator } from '@/components/ui/separator';

interface DividerProps {
  element: Element;
  index?: number;
}

export function Divider({ element, index }: DividerProps) {
  const {
    ref,
    handleSelect,
    isSelected,
    dragDropClasses,
  } = useDragDrop(element, index);
  
  // Get divider style
  const style = {
    ...element.style,
    marginTop: element.style?.marginTop || '1rem',
    marginBottom: element.style?.marginBottom || '1rem',
    borderColor: element.style?.borderColor || 'hsl(var(--muted))',
    borderWidth: element.style?.borderWidth || '1px',
  };
  
  return (
    <div
      ref={ref}
      onClick={handleSelect}
      className={`${dragDropClasses} ${element.className || ''}`}
      style={{ position: 'relative' }}
    >
      <Separator style={style} />
    </div>
  );
}
