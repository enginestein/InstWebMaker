import { Element } from '@/components/elements/ElementTypes';
import { useElementActions } from '@/hooks/useElementActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBuilder } from '@/context/BuilderContext';

interface ImagePropertiesProps {
  element: Element;
}

export function ImageProperties({ element }: ImagePropertiesProps) {
  const { updateElement } = useBuilder();
  const { updateStyle } = useElementActions();
  
  const handleSrcChange = (src: string) => {
    updateElement(element.id, { src });
  };
  
  const handleAltChange = (alt: string) => {
    updateElement(element.id, { alt });
  };
  
  return (
    <>
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Image URL</Label>
        <Input
          type="text"
          value={element.src || ''}
          onChange={(e) => handleSrcChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Alt Text</Label>
        <Input
          type="text"
          value={element.alt || ''}
          onChange={(e) => handleAltChange(e.target.value)}
          placeholder="Image description"
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Object Fit</Label>
        <Select 
          value={element.style?.objectFit || 'cover'} 
          onValueChange={(value) => updateStyle(element.id, { objectFit: value as any })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select object fit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="contain">Contain</SelectItem>
            <SelectItem value="cover">Cover</SelectItem>
            <SelectItem value="fill">Fill</SelectItem>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="scale-down">Scale Down</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <Label className="block text-sm font-medium mb-1">Width</Label>
          <div className="flex">
            <Input
              type="number"
              value={parseFloat(String(element.style?.width || '100').replace(/%|px/, ''))}
              onChange={(e) => updateStyle(element.id, { width: e.target.value ? `${e.target.value}${element.style?.width?.toString().includes('%') ? '%' : 'px'}` : '' })}
              className="rounded-r-none"
            />
            <Select 
              value={element.style?.width?.toString().includes('%') ? '%' : 'px'} 
              onValueChange={(value) => {
                const currentWidth = parseFloat(String(element.style?.width || '100').replace(/%|px/, ''));
                updateStyle(element.id, { width: `${currentWidth}${value}` });
              }}
            >
              <SelectTrigger className="w-20 rounded-l-none border-l-0">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="px">px</SelectItem>
                <SelectItem value="%">%</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="block text-sm font-medium mb-1">Height</Label>
          <div className="flex">
            <Input
              type="number"
              value={parseFloat(String(element.style?.height || 'auto').replace(/px|auto/, '') || '0')}
              onChange={(e) => updateStyle(element.id, { height: e.target.value ? `${e.target.value}px` : 'auto' })}
              className="rounded-r-none"
            />
            <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
          </div>
        </div>
      </div>
    </>
  );
}
