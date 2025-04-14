import { Element } from '@/components/elements/ElementTypes';
import { CommonProperties } from './CommonProperties';
import { TextProperties } from './TextProperties';
import { ImageProperties } from './ImageProperties';
import { ButtonProperties } from './ButtonProperties';
import { ContainerProperties } from './ContainerProperties';
import { useBuilder } from '@/context/BuilderContext';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useElementActions } from '@/hooks/useElementActions';

interface ElementPropertiesProps {
  element: Element;
}

export function ElementProperties({ element }: ElementPropertiesProps) {
  const { removeElement } = useBuilder();
  const { deleteElement } = useElementActions();
  
  // Handle element deletion
  const handleDelete = () => {
    deleteElement(element.id);
  };
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Element Type</label>
        <div className="text-sm bg-muted p-2 rounded border border-border capitalize">
          {element.type}
        </div>
      </div>
      
      {/* Render properties specific to element type */}
      {element.type === 'text' && <TextProperties element={element} />}
      {element.type === 'heading' && <TextProperties element={element} />}
      {element.type === 'image' && <ImageProperties element={element} />}
      {element.type === 'button' && <ButtonProperties element={element} />}
      {(element.type === 'container' || 
        element.type === 'row' || 
        element.type === 'column' || 
        element.type === 'form') && 
        <ContainerProperties element={element} />}
      
      {/* Common properties for all elements */}
      <CommonProperties element={element} />
      
      {/* Delete button */}
      <div className="mt-6 pt-4 border-t border-border">
        <Button 
          variant="destructive" 
          className="w-full"
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Element
        </Button>
      </div>
    </div>
  );
}
