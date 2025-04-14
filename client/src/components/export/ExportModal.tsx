import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useBuilder } from "@/context/BuilderContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useExport } from "@/hooks/useExport";
import { toast } from "@/hooks/use-toast";
import { Copy, Download, X } from "lucide-react";
import { useState } from "react";
import { generateFullHtml } from "@/lib/htmlGenerator";

export function ExportModal() {
  const { canvas, isExportModalOpen, toggleExportModal } = useBuilder();
  const { exportAsHtmlCss, exportAsSingleHtml } = useExport();
  const [filename, setFilename] = useState("my-website");
  const [exportType, setExportType] = useState<"htmlcss" | "singlehtml">("singlehtml");
  
  const handleExport = () => {
    let success = false;
    
    if (exportType === "htmlcss") {
      success = exportAsHtmlCss(canvas, filename);
    } else {
      success = exportAsSingleHtml(canvas, filename);
    }
    
    if (success) {
      toast({
        title: "Export Successful",
        description: `Your website has been exported as ${exportType === "htmlcss" ? "HTML and CSS files" : "a single HTML file"}.`,
      });
      toggleExportModal();
    } else {
      toast({
        title: "Export Failed",
        description: "There was an error exporting your website.",
        variant: "destructive",
      });
    }
  };
  
  const handleCopyCode = () => {
    const htmlCode = generateFullHtml(canvas);
    navigator.clipboard.writeText(htmlCode);
    
    toast({
      title: "Code Copied",
      description: "HTML code has been copied to clipboard.",
    });
  };
  
  return (
    <Dialog open={isExportModalOpen} onOpenChange={toggleExportModal}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span>Export Website</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-auto" 
              onClick={toggleExportModal}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Export your website as HTML/CSS files that you can host anywhere.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="options" className="mt-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="options">Export Options</TabsTrigger>
            <TabsTrigger value="preview">Code Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="options" className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium mb-2">Filename</label>
              <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                className="w-full p-2 border border-border rounded"
                placeholder="my-website"
              />
              <p className="text-sm text-muted-foreground mt-1">
                The name of the exported file(s).
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Export Type</label>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <input
                    type="radio"
                    id="singlehtml"
                    name="exportType"
                    checked={exportType === "singlehtml"}
                    onChange={() => setExportType("singlehtml")}
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="singlehtml" className="font-medium">Single HTML File</label>
                    <p className="text-sm text-muted-foreground">
                      Export as a single HTML file with CSS embedded. Best for simple websites.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <input
                    type="radio"
                    id="htmlcss"
                    name="exportType"
                    checked={exportType === "htmlcss"}
                    onChange={() => setExportType("htmlcss")}
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="htmlcss" className="font-medium">Separate HTML/CSS Files</label>
                    <p className="text-sm text-muted-foreground">
                      Export as separate HTML and CSS files. Better for larger projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="my-4 relative">
              <div className="bg-muted p-4 rounded overflow-auto max-h-[300px] text-sm font-mono">
                <pre>{generateFullHtml(canvas, true)}</pre>
              </div>
              
              <Button 
                size="sm" 
                variant="secondary" 
                className="absolute top-2 right-2"
                onClick={handleCopyCode}
              >
                <Copy className="h-3.5 w-3.5 mr-1" />
                Copy
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={toggleExportModal}>
            Cancel
          </Button>
          <Button onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export Website
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
