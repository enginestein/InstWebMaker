import { useDrag } from 'react-dnd';
import { useBuilder } from '@/context/BuilderContext';
import { ElementType } from './ElementTypes';
import { elementsLibrary } from '@/lib/elementsLibrary';

interface ElementCardProps {
  type: ElementType;
}

export function ElementCard({ type }: ElementCardProps) {
  const { setIsDragging } = useBuilder();
  const element = elementsLibrary.find(item => item.type === type);
  
  if (!element) return null;
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: () => {
      setIsDragging(true);
      return { 
        type: element.type,
        ...element.defaultProps
      };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
    end: (item, monitor) => {
      setIsDragging(false);
    }
  }));
  
  return (
    <div 
      ref={drag}
      className={`bg-background border border-muted rounded p-2 cursor-move hover:border-primary transition-colors flex flex-col items-center ${isDragging ? 'element-dragging' : ''}`}
    >
      <span className="material-icons text-muted-foreground mb-1">{element.icon}</span>
      <span className="text-xs">{element.label}</span>
    </div>
  );
}
