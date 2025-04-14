import { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useBuilder } from "@/context/BuilderContext";
import { X, Smartphone, Tablet, Monitor, ExternalLink, Maximize2, Minimize2, RefreshCcw } from "lucide-react";
import { generateFullHtml } from "@/lib/htmlGenerator";

interface PreviewModalProps {
  onClose: () => void;
}

export function PreviewModal({ onClose }: PreviewModalProps) {
  const { canvas, device, setDevice } = useBuilder();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Apply HTML to the iframe when canvas changes
  useEffect(() => {
    if (iframeRef.current) {
      setLoading(true);
      const html = generateFullHtml(canvas);
      const doc = iframeRef.current.contentDocument;
      
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
        
        // After a short delay, hide loading indicator
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [canvas, device]);
  
  // Get the device width for the preview
  const getDeviceWidth = () => {
    if (fullScreen) return '100%';
    
    switch(device) {
      case 'mobile': return 375;
      case 'tablet': return 768;
      case 'desktop': return 1000;
      default: return 1000;
    }
  };
  
  // Handle opening in a new tab
  const openInNewTab = () => {
    const html = generateFullHtml(canvas);
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(html);
      newWindow.document.close();
    }
  };
  
  // Reload the preview
  const reloadPreview = () => {
    if (iframeRef.current) {
      setLoading(true);
      const html = generateFullHtml(canvas);
      const doc = iframeRef.current.contentDocument;
      
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
        
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
  };
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] h-[95vh] flex flex-col p-0 gap-0 border-none bg-[#1e1e1e] text-white overflow-hidden">
        <DialogHeader className="flex-shrink-0 p-3 bg-[#252525] border-b border-[#333]">
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white">Preview: {canvas.id || "Website"}</span>
              <div className="ml-6 flex items-center space-x-1 border border-[#444] rounded bg-[#333] p-1">
                <Button
                  variant={device === 'mobile' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('mobile')}
                  title="Mobile View"
                  className="h-7 w-7"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant={device === 'tablet' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('tablet')}
                  title="Tablet View"
                  className="h-7 w-7"
                >
                  <Tablet className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant={device === 'desktop' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setDevice('desktop')}
                  title="Desktop View"
                  className="h-7 w-7"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </Button>
              </div>
              
              <div className="ml-2 flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={reloadPreview}
                  title="Reload Preview"
                  className="h-7 w-7"
                >
                  <RefreshCcw className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFullScreen(!fullScreen)}
                  title={fullScreen ? "Exit Full Screen" : "Full Screen"}
                  className="h-7 w-7"
                >
                  {fullScreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                </Button>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-7 w-7 hover:bg-red-500/10 hover:text-red-400"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto bg-[#131313] flex items-center justify-center">
          {loading && (
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div 
            className={`bg-white shadow-lg transition-all duration-300 h-full ${fullScreen ? 'w-full' : 'shadow-[0_0_30px_rgba(0,0,0,0.3)]'}`}
            style={{ width: getDeviceWidth() }}
          >
            <iframe
              ref={iframeRef}
              className="w-full h-full border-none"
              title="Website Preview"
            />
          </div>
        </div>
        
        <div className="flex-shrink-0 p-3 bg-[#252525] border-t border-[#333] flex justify-between items-center">
          <div className="text-sm text-[#999]">
            <span className="font-medium capitalize text-white">{device}</span> view
            {!fullScreen && (
              <span className="ml-2 text-xs">
                {device === 'mobile' ? '375px' : device === 'tablet' ? '768px' : '1000px'} width
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={openInNewTab} className="bg-[#333] border-[#444] hover:bg-[#444]">
            <ExternalLink className="h-3.5 w-3.5 mr-2" />
            Open in New Tab
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
