import { useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useBuilder } from "@/context/BuilderContext";
import { X, Smartphone, Tablet, Monitor, ExternalLink } from "lucide-react";
import { generateFullHtml } from "@/lib/htmlGenerator";

interface PreviewModalProps {
  onClose: () => void;
}

export function PreviewModal({ onClose }: PreviewModalProps) {
  const { canvas, device, setDevice } = useBuilder();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Apply HTML to the iframe when canvas changes
  useEffect(() => {
    if (iframeRef.current) {
      const html = generateFullHtml(canvas);
      const doc = iframeRef.current.contentDocument;
      
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
      }
    }
  }, [canvas]);
  
  // Get the device width for the preview
  const getDeviceWidth = () => {
    switch(device) {
      case 'mobile': return 375;
      case 'tablet': return 768;
      case 'desktop': return 1000;
      default: return 1000;
    }
  };
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <span>Preview Website</span>
              <div className="ml-8 flex items-center space-x-2 border border-border rounded p-1">
                <Button
                  variant={device === 'mobile' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('mobile')}
                  title="Mobile View"
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
                <Button
                  variant={device === 'tablet' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('tablet')}
                  title="Tablet View"
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={device === 'desktop' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('desktop')}
                  title="Desktop View"
                >
                  <Monitor className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto bg-muted flex items-center justify-center">
          <div 
            className="bg-white shadow-md transition-all duration-300 h-full"
            style={{ width: getDeviceWidth() }}
          >
            <iframe
              ref={iframeRef}
              className="w-full h-full border-none"
              title="Website Preview"
            />
          </div>
        </div>
        
        <div className="flex-shrink-0 pt-4 flex justify-between">
          <div className="text-sm text-muted-foreground">
            Preview mode: <span className="font-medium capitalize">{device}</span>
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-3.5 w-3.5 mr-2" />
            Open in New Tab
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
