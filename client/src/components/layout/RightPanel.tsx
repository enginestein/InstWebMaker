import { ElementProperties } from '@/components/properties/ElementProperties';
import { useBuilder } from '@/context/BuilderContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function RightPanel() {
  const { selectedElement, clearSelection } = useBuilder();
  
  // If no element is selected, don't render the panel
  if (!selectedElement) {
    return null;
  }
  
  return (
    <div className="w-72 bg-background border-l border-border flex flex-col overflow-hidden">
      <div className="border-b border-border p-3 flex justify-between items-center">
        <h3 className="font-medium">Element Properties</h3>
        <Button variant="ghost" size="icon" onClick={clearSelection}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <ElementProperties element={selectedElement} />
      </ScrollArea>
    </div>
  );
}
