import { Element } from '@/components/elements/ElementTypes';
import { CommonProperties } from './CommonProperties';
import { TextProperties } from './TextProperties';
import { ImageProperties } from './ImageProperties';
import { ButtonProperties } from './ButtonProperties';
import { ContainerProperties } from './ContainerProperties';
import { useBuilder } from '@/context/BuilderContext';
import { Button } from '@/components/ui/button';
import { Trash2, Copy, Grid3X3 } from 'lucide-react';
import { useElementActions } from '@/hooks/useElementActions';

interface ElementPropertiesProps {
  element: Element;
}

export function ElementProperties({ element }: ElementPropertiesProps) {
  const { removeElement, toggleGrid } = useBuilder();
  const { deleteElement, duplicateElement } = useElementActions();
  
  // Handle element deletion
  const handleDelete = () => {
    deleteElement(element.id);
  };
  
  // Handle element duplication
  const handleDuplicate = () => {
    duplicateElement(element);
  };
  
  // Handle grid toggle
  const handleToggleGrid = () => {
    toggleGrid();
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
      
      {/* Element Actions */}
      <div className="mt-6 pt-4 border-t border-border space-y-3">
        {/* Duplicate button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleDuplicate}
        >
          <Copy className="h-4 w-4 mr-2" />
          Duplicate Element
        </Button>
        
        {/* Toggle grid button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleToggleGrid}
        >
          <Grid3X3 className="h-4 w-4 mr-2" />
          Toggle Layout Grid
        </Button>
        
        {/* Delete button */}
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
