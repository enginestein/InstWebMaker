import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { templates, Template } from '@/lib/templates';
import { useBuilder } from '@/context/BuilderContext';
import { toast } from '@/hooks/use-toast';

interface TemplateSelectorProps {
  open: boolean;
  onClose: () => void;
}

export function TemplateSelector({ open, onClose }: TemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const { canvas, clearCanvas, setCanvas } = useBuilder();
  
  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };
  
  const handleUseTemplate = () => {
    if (selectedTemplate) {
      // Replace the canvas with the template canvas
      const newCanvas = JSON.parse(JSON.stringify(selectedTemplate.canvas));
      
      // Update the BuilderContext's canvas
      setCanvas(newCanvas);
      
      toast({
        title: "Template Applied",
        description: `The ${selectedTemplate.name} template has been applied.`,
      });
      
      onClose();
    }
  };
  
  const handleStartBlank = () => {
    clearCanvas();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose a Template</DialogTitle>
          <DialogDescription>
            Start with a pre-designed template or create your own from scratch.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blank Canvas Option */}
            <div 
              className={`border border-border rounded-lg overflow-hidden cursor-pointer transition-all hover:border-primary hover:shadow-md ${!selectedTemplate ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedTemplate(null)}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-muted-foreground text-xl">Blank Canvas</div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">Blank Canvas</h3>
                <p className="text-sm text-muted-foreground">
                  Start from scratch with an empty canvas.
                </p>
              </div>
            </div>
            
            {/* Template Options */}
            {templates.map((template) => (
              <div
                key={template.id}
                className={`border border-border rounded-lg overflow-hidden cursor-pointer transition-all hover:border-primary hover:shadow-md ${selectedTemplate?.id === template.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleSelectTemplate(template)}
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  {/* Use a scaled-down representation of the template */}
                  <div className="p-2 transform scale-[0.25] origin-top-left w-[400%] h-[400%]">
                    {/* A visual preview would go here */}
                    <div className="h-full border border-border rounded shadow-sm">
                      <div className="bg-primary p-4 text-white">
                        <div className="font-bold text-3xl">{template.name}</div>
                      </div>
                      <div className="bg-white p-4">
                        <div className="border-b border-border pb-2 mb-2">Nav Menu</div>
                        <div className="h-16 bg-primary/10 rounded mb-2"></div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-8 bg-primary/10 rounded"></div>
                          <div className="h-8 bg-primary/10 rounded"></div>
                          <div className="h-8 bg-primary/10 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {template.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <DialogFooter className="pt-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          {selectedTemplate ? (
            <Button onClick={handleUseTemplate}>
              Use Template
            </Button>
          ) : (
            <Button onClick={handleStartBlank}>
              Start with Blank Canvas
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}