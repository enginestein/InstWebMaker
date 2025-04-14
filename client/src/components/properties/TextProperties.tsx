import { Element } from '@/components/elements/ElementTypes';
import { useElementActions } from '@/hooks/useElementActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TextPropertiesProps {
  element: Element;
}

export function TextProperties({ element }: TextPropertiesProps) {
  const { updateContent, updateStyle } = useElementActions();
  
  return (
    <>
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Text Content</Label>
        <Textarea
          value={element.content || ''}
          onChange={(e) => updateContent(element.id, e.target.value)}
          rows={3}
          className="w-full"
        />
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Font</Label>
        <Select 
          value={element.style?.fontFamily || 'Inter'} 
          onValueChange={(value) => updateStyle(element.id, { fontFamily: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Inter">Inter</SelectItem>
            <SelectItem value="Arial">Arial</SelectItem>
            <SelectItem value="Helvetica">Helvetica</SelectItem>
            <SelectItem value="Times New Roman">Times New Roman</SelectItem>
            <SelectItem value="Georgia">Georgia</SelectItem>
            <SelectItem value="Verdana">Verdana</SelectItem>
            <SelectItem value="Courier New">Courier New</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <Label className="block text-sm font-medium mb-1">Size</Label>
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
        <div>
          <Label className="block text-sm font-medium mb-1">Weight</Label>
          <Select 
            value={String(element.style?.fontWeight || '400')} 
            onValueChange={(value) => updateStyle(element.id, { fontWeight: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300">Light</SelectItem>
              <SelectItem value="400">Normal</SelectItem>
              <SelectItem value="500">Medium</SelectItem>
              <SelectItem value="600">Semibold</SelectItem>
              <SelectItem value="700">Bold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Color</Label>
        <div className="flex">
          <input
            type="color"
            value={element.style?.color || '#1e293b'}
            onChange={(e) => updateStyle(element.id, { color: e.target.value })}
            className="w-10 h-10 border border-border rounded-l p-1"
          />
          <Input
            type="text"
            value={element.style?.color || '#1e293b'}
            onChange={(e) => updateStyle(element.id, { color: e.target.value })}
            className="border-l-0 rounded-l-none"
          />
        </div>
      </div>
    </>
  );
}
