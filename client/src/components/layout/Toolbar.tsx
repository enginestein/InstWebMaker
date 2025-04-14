import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBuilder } from '@/context/BuilderContext';
import { Undo2, Redo2, Save, Eye, Grid, Code, Construction, LayoutTemplate } from 'lucide-react';
import { useState } from 'react';
import { DeviceType } from '@/components/elements/ElementTypes';
import { ExportModal } from '@/components/export/ExportModal';
import { PreviewModal } from '@/components/preview/PreviewModal';
import { TemplateSelector } from '@/components/templates/TemplateSelector';

export function Toolbar() {
  const { 
    canUndo, 
    canRedo, 
    undo, 
    redo, 
    device, 
    setDevice, 
    toggleGrid, 
    showGrid,
    setPreviewMode,
    isPreviewMode,
    toggleExportModal,
    isExportModalOpen,
    toggleTemplateSelector,
    isTemplateSelectorOpen
  } = useBuilder();
  
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  
  const handleDeviceChange = (value: string) => {
    setDevice(value as DeviceType);
  };
  
  const handlePreviewClick = () => {
    setIsPreviewModalOpen(true);
    setPreviewMode(true);
  };
  
  const handlePreviewClose = () => {
    setIsPreviewModalOpen(false);
    setPreviewMode(false);
  };
  
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-background border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Construction className="text-primary mr-2 h-5 w-5" />
          <h1 className="text-xl font-semibold text-primary">DragDrop Builder</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={undo}
            disabled={!canUndo}
            title="Undo"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={redo}
            disabled={!canRedo}
            title="Redo"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
          <div className="h-6 w-px bg-muted mx-1"></div>
          <Button
            variant="ghost"
            size="icon"
            title="Save"
          >
            <Save className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePreviewClick}
            title="Preview"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleGrid}
            title="Toggle Grid"
            className={showGrid ? "bg-muted" : ""}
          >
            <Grid className="h-4 w-4" />
          </Button>
          
          <Select value={device} onValueChange={handleDeviceChange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Device" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={toggleExportModal} className="flex items-center">
          <Code className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
      
      {isPreviewModalOpen && <PreviewModal onClose={handlePreviewClose} />}
      {isExportModalOpen && <ExportModal />}
    </header>
  );
}
