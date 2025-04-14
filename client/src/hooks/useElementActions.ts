import { useState, useCallback } from 'react';
import { Element, ElementStyle } from '@/components/elements/ElementTypes';
import { useBuilder } from '@/context/BuilderContext';
import { generateId } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

export function useElementActions() {
  const { updateElement, removeElement, selectElement, selectedElement, addElement } = useBuilder();
  
  // Update content of an element
  const updateContent = useCallback((id: string, content: string) => {
    updateElement(id, { content });
  }, [updateElement]);
  
  // Update style of an element
  const updateStyle = useCallback((id: string, style: Partial<ElementStyle>) => {
    updateElement(id, { 
      style: { 
        ...selectedElement?.style, 
        ...style 
      } 
    });
  }, [updateElement, selectedElement]);
  
  // Update attributes of an element
  const updateAttributes = useCallback((id: string, attributes: Record<string, string>) => {
    updateElement(id, { 
      attributes: { 
        ...selectedElement?.attributes, 
        ...attributes 
      } 
    });
  }, [updateElement, selectedElement]);
  
  // Duplicate an element
  const duplicateElement = useCallback((element: Element) => {
    if (!element) return;
    
    // Create a duplicate with new ID
    const duplicate: Omit<Element, 'id'> = {
      ...element,
      parentId: element.parentId, // Keep the same parent
    };
    
    // Use the addElement method from BuilderContext 
    // to add the duplicate under the same parent
    if (element.parentId) {
      addElement(duplicate, element.parentId);
      
      toast({
        title: "Element Duplicated",
        description: `${element.type} element has been duplicated.`,
      });
      
      return element.parentId;
    }
    
    return null;
  }, [addElement]);
  
  // Delete an element
  const deleteElement = useCallback((id: string) => {
    removeElement(id);
  }, [removeElement]);
  
  return {
    updateContent,
    updateStyle,
    updateAttributes,
    duplicateElement,
    deleteElement,
  };
}
