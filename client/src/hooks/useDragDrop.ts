import { useRef, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Element } from '@/components/elements/ElementTypes';
import { useBuilder } from '@/context/BuilderContext';

interface DragItem {
  id?: string;
  type: string;
  parentId?: string;
  index?: number;
  [key: string]: any;
}

export function useDragDrop(
  element: Element,
  index?: number,
  acceptDropType = 'element'
) {
  const { moveElement, addElement, selectElement, selectedElement, updateElement, setIsDragging } = useBuilder();
  const ref = useRef<HTMLDivElement>(null);
  
  // Set up dragging
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: () => {
      setIsDragging(true);
      return {
        id: element.id,
        type: element.type,
        parentId: element.parentId,
        index,
      };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      setIsDragging(false);
      if (!monitor.didDrop()) {
        // TODO: handle drag cancel if needed
      }
    },
  });

  // Set up dropping
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: acceptDropType,
    drop: (item: DragItem, monitor) => {
      if (monitor.didDrop()) {
        return; // Don't handle if a child already handled it
      }
      
      // If the item doesn't have an ID, it's a new element from the library
      if (!item.id) {
        addElement(item, element.id);
        return;
      }
      
      // If it's the same element, do nothing
      if (item.id === element.id) {
        return;
      }
      
      // Move the element
      moveElement(item.id, element.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver({ shallow: true }),
      canDrop: !!monitor.canDrop(),
    }),
  });
  
  // Combine drag and drop refs
  const attachRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    
    // Set ref.current to the element
    ref.current = el;
    
    // Apply drag and drop refs
    drag(el);
    drop(el);
  }, [drag, drop]);
  
  // Handle element selection
  const handleSelect = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    selectElement(element.id);
  }, [element.id, selectElement]);
  
  // Determine if this element is selected
  const isSelected = selectedElement?.id === element.id;
  
  // Visual effects for drag and drop interactions
  const dragDropClasses = [
    isOver && canDrop ? 'drop-indicator' : '',
    isDragging ? 'opacity-50' : '',
    isSelected ? 'element-selected' : '',
  ].filter(Boolean).join(' ');
  
  return {
    ref: attachRef,
    isDragging,
    isOver,
    canDrop,
    handleSelect,
    isSelected,
    dragDropClasses,
  };
}
