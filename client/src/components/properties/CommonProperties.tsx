import { Element, ElementStyle } from '@/components/elements/ElementTypes';
import { useBuilder } from '@/context/BuilderContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useElementActions } from '@/hooks/useElementActions';
import { Button } from '@/components/ui/button';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CommonPropertiesProps {
  element: Element;
}

export function CommonProperties({ element }: CommonPropertiesProps) {
  const { updateStyle } = useElementActions();
  
  const handleStyleChange = (property: keyof ElementStyle, value: string | number) => {
    updateStyle(element.id, { [property]: value });
  };
  
  // Determine if alignment options should be shown
  const showAlignment = ['text', 'heading', 'paragraph'].includes(element.type);
  
  return (
    <div className="space-y-4 mt-4">
      <Tabs defaultValue="spacing" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
          <TabsTrigger value="size">Size</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>
        
        <TabsContent value="spacing">
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-2">Margin</Label>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <span className="text-xs block text-center mb-1">Top</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.marginTop)}
                  onChange={(e) => handleStyleChange('marginTop', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Right</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.marginRight)}
                  onChange={(e) => handleStyleChange('marginRight', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Bottom</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.marginBottom)}
                  onChange={(e) => handleStyleChange('marginBottom', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Left</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.marginLeft)}
                  onChange={(e) => handleStyleChange('marginLeft', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-2">Padding</Label>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <span className="text-xs block text-center mb-1">Top</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.paddingTop)}
                  onChange={(e) => handleStyleChange('paddingTop', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Right</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.paddingRight)}
                  onChange={(e) => handleStyleChange('paddingRight', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Bottom</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.paddingBottom)}
                  onChange={(e) => handleStyleChange('paddingBottom', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Left</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.paddingLeft)}
                  onChange={(e) => handleStyleChange('paddingLeft', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="size">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Width</Label>
              <div className="flex">
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.width)}
                  onChange={(e) => handleStyleChange('width', e.target.value ? `${e.target.value}px` : '')}
                  className="rounded-r-none"
                />
                <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
              </div>
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Height</Label>
              <div className="flex">
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.height)}
                  onChange={(e) => handleStyleChange('height', e.target.value ? `${e.target.value}px` : '')}
                  className="rounded-r-none"
                />
                <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Border Radius</Label>
            <div className="flex">
              <Input
                type="number"
                value={parseNumberValue(element.style?.borderRadius)}
                onChange={(e) => handleStyleChange('borderRadius', e.target.value ? `${e.target.value}px` : '')}
                className="rounded-r-none"
              />
              <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="style">
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Background Color</Label>
            <div className="flex">
              <input
                type="color"
                value={element.style?.backgroundColor || '#ffffff'}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                className="w-10 h-10 border border-border rounded-l p-1"
              />
              <Input
                type="text"
                value={element.style?.backgroundColor || '#ffffff'}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                className="border-l-0 rounded-l-none"
              />
            </div>
          </div>
          
          {showAlignment && (
            <div className="mb-4">
              <Label className="block text-sm font-medium mb-1">Alignment</Label>
              <div className="flex border border-border rounded overflow-hidden divide-x divide-border">
                <Button
                  type="button"
                  variant={element.style?.textAlign === 'left' || !element.style?.textAlign ? 'default' : 'ghost'}
                  className="flex-1 rounded-none"
                  onClick={() => handleStyleChange('textAlign', 'left')}
                >
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={element.style?.textAlign === 'center' ? 'default' : 'ghost'}
                  className="flex-1 rounded-none"
                  onClick={() => handleStyleChange('textAlign', 'center')}
                >
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={element.style?.textAlign === 'right' ? 'default' : 'ghost'}
                  className="flex-1 rounded-none"
                  onClick={() => handleStyleChange('textAlign', 'right')}
                >
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant={element.style?.textAlign === 'justify' ? 'default' : 'ghost'}
                  className="flex-1 rounded-none"
                  onClick={() => handleStyleChange('textAlign', 'justify')}
                >
                  <AlignJustify className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Border</Label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-xs block text-center mb-1">Width</span>
                <Input
                  type="number"
                  value={parseNumberValue(element.style?.borderWidth)}
                  onChange={(e) => handleStyleChange('borderWidth', e.target.value ? `${e.target.value}px` : '')}
                  className="text-center"
                />
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Style</span>
                <select
                  value={element.style?.borderStyle || 'solid'}
                  onChange={(e) => handleStyleChange('borderStyle', e.target.value)}
                  className="w-full border border-border rounded p-2 text-sm"
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div>
                <span className="text-xs block text-center mb-1">Color</span>
                <input
                  type="color"
                  value={element.style?.borderColor || '#e2e8f0'}
                  onChange={(e) => handleStyleChange('borderColor', e.target.value)}
                  className="w-full h-9 border border-border rounded p-1"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Helper function to parse number values from CSS strings
function parseNumberValue(value: string | number | undefined): number {
  if (value === undefined) return 0;
  if (typeof value === 'number') return value;
  
  // Extract number from CSS value (e.g. "10px" -> 10)
  const match = value.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}
