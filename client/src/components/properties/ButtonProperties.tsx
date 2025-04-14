import { Element } from '@/components/elements/ElementTypes';
import { useElementActions } from '@/hooks/useElementActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useBuilder } from '@/context/BuilderContext';

interface ButtonPropertiesProps {
  element: Element;
}

export function ButtonProperties({ element }: ButtonPropertiesProps) {
  const { updateElement } = useBuilder();
  const { updateContent, updateStyle } = useElementActions();
  
  const handleHrefChange = (href: string) => {
    updateElement(element.id, { href });
  };
  
  return (
    <>
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Button Text</Label>
        <Input
          type="text"
          value={element.content || ''}
          onChange={(e) => updateContent(element.id, e.target.value)}
          placeholder="Button Text"
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Link URL</Label>
        <Input
          type="text"
          value={element.href || ''}
          onChange={(e) => handleHrefChange(e.target.value)}
          placeholder="https://example.com"
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Background Color</Label>
        <div className="flex">
          <input
            type="color"
            value={element.style?.backgroundColor || 'hsl(var(--primary))'}
            onChange={(e) => updateStyle(element.id, { backgroundColor: e.target.value })}
            className="w-10 h-10 border border-border rounded-l p-1"
          />
          <Input
            type="text"
            value={element.style?.backgroundColor || 'hsl(var(--primary))'}
            onChange={(e) => updateStyle(element.id, { backgroundColor: e.target.value })}
            className="border-l-0 rounded-l-none"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Text Color</Label>
        <div className="flex">
          <input
            type="color"
            value={element.style?.color || '#ffffff'}
            onChange={(e) => updateStyle(element.id, { color: e.target.value })}
            className="w-10 h-10 border border-border rounded-l p-1"
          />
          <Input
            type="text"
            value={element.style?.color || '#ffffff'}
            onChange={(e) => updateStyle(element.id, { color: e.target.value })}
            className="border-l-0 rounded-l-none"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <Label className="block text-sm font-medium mb-1">Border Radius</Label>
          <div className="flex">
            <Input
              type="number"
              value={parseFloat(String(element.style?.borderRadius || '4').replace('px', ''))}
              onChange={(e) => updateStyle(element.id, { borderRadius: e.target.value ? `${e.target.value}px` : '' })}
              className="rounded-r-none"
            />
            <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
          </div>
        </div>
        <div>
          <Label className="block text-sm font-medium mb-1">Font Size</Label>
          <div className="flex">
            <Input
              type="number"
              value={parseFloat(String(element.style?.fontSize || '16').replace('px', ''))}
              onChange={(e) => updateStyle(element.id, { fontSize: e.target.value ? `${e.target.value}px` : '' })}
              className="rounded-r-none"
            />
            <span className="bg-muted border border-l-0 border-border rounded-r px-2 flex items-center text-sm">px</span>
          </div>
        </div>
      </div>
    </>
  );
}
