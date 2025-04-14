import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ElementCard } from '@/components/elements/ElementCard';
import { ElementType } from '@/components/elements/ElementTypes';
import { elementsLibrary } from '@/lib/elementsLibrary';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ElementProperties } from '@/components/properties/ElementProperties';
import { useBuilder } from '@/context/BuilderContext';

export function LeftPanel() {
  const { selectedElement } = useBuilder();
  const [activeTab, setActiveTab] = useState<string>(selectedElement ? 'properties' : 'elements');
  
  // Group elements by category
  const groupedElements = elementsLibrary.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof elementsLibrary>);
  
  // If an element is selected, automatically switch to properties tab
  if (selectedElement && activeTab !== 'properties') {
    setActiveTab('properties');
  }
  
  // If element is deselected, switch back to elements tab
  if (!selectedElement && activeTab === 'properties') {
    setActiveTab('elements');
  }
  
  // Category labels
  const categoryLabels = {
    layout: 'Layout',
    basic: 'Basic Elements',
    form: 'Form Elements',
    content: 'Content'
  };
  
  return (
    <div className="w-64 bg-background border-r border-border flex flex-col overflow-hidden">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="properties" disabled={!selectedElement}>Properties</TabsTrigger>
        </TabsList>
        
        <TabsContent value="elements" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4">
              {Object.entries(groupedElements).map(([category, elements]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {elements.map((element) => (
                      <ElementCard key={element.type} type={element.type as ElementType} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="properties" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            {selectedElement ? (
              <ElementProperties element={selectedElement} />
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                Select an element to edit its properties
              </div>
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
