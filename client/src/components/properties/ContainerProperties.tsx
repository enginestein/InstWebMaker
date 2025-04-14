import { Element } from '@/components/elements/ElementTypes';
import { useElementActions } from '@/hooks/useElementActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContainerPropertiesProps {
  element: Element;
}

export function ContainerProperties({ element }: ContainerPropertiesProps) {
  const { updateStyle } = useElementActions();
  
  // Only show flex properties for row and column
  const isFlexContainer = element.type === 'row' || element.type === 'column';
  
  return (
    <>
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Background Color</Label>
        <div className="flex">
          <input
            type="color"
            value={element.style?.backgroundColor || '#ffffff'}
            onChange={(e) => updateStyle(element.id, { backgroundColor: e.target.value })}
            className="w-10 h-10 border border-border rounded-l p-1"
          />
          <Input
            type="text"
            value={element.style?.backgroundColor || '#ffffff'}
            onChange={(e) => updateStyle(element.id, { backgroundColor: e.target.value })}
            className="border-l-0 rounded-l-none"
          />
        </div>
      </div>
      
      {isFlexContainer && (
        <>
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Direction</Label>
            <Select 
              value={element.style?.flexDirection || (element.type === 'row' ? 'row' : 'column')} 
              onValueChange={(value) => updateStyle(element.id, { flexDirection: value as 'row' | 'column' })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select direction" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="row">Row</SelectItem>
                <SelectItem value="column">Column</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Justify Content</Label>
            <Select 
              value={element.style?.justifyContent || 'flex-start'} 
              onValueChange={(value) => updateStyle(element.id, { justifyContent: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select justification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flex-start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="flex-end">End</SelectItem>
                <SelectItem value="space-between">Space Between</SelectItem>
                <SelectItem value="space-around">Space Around</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Align Items</Label>
            <Select 
              value={element.style?.alignItems || 'stretch'} 
              onValueChange={(value) => updateStyle(element.id, { alignItems: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select alignment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flex-start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="flex-end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="baseline">Baseline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1">Gap</Label>
            <div className="flex">
              <Input
                type="number"
                value={parseFloat(String(element.style?.gap || '0').replace('px', ''))}
                onChange={(e) => updateStyle(element.id, { gap: e.target.value ? `${e.target.value}px` : '' })}
                className="rounded-r-none"
              />
              <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
            </div>
          </div>
        </>
      )}
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Border</Label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <span className="text-xs block text-center mb-1">Width</span>
            <Input
              type="number"
              value={parseFloat(String(element.style?.borderWidth || '1').replace('px', ''))}
              onChange={(e) => updateStyle(element.id, { borderWidth: e.target.value ? `${e.target.value}px` : '' })}
              className="text-center"
            />
          </div>
          <div>
            <span className="text-xs block text-center mb-1">Style</span>
            <Select 
              value={element.style?.borderStyle || 'solid'} 
              onValueChange={(value) => updateStyle(element.id, { borderStyle: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="dashed">Dashed</SelectItem>
                <SelectItem value="dotted">Dotted</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <span className="text-xs block text-center mb-1">Color</span>
            <input
              type="color"
              value={element.style?.borderColor || '#e2e8f0'}
              onChange={(e) => updateStyle(element.id, { borderColor: e.target.value })}
              className="w-full h-10 border border-border rounded p-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
