import { useBuilder } from '@/context/BuilderContext';

export function StatusBar() {
  const { selectedElement, canvas, device } = useBuilder();
  
  // Get the canvas dimensions based on device
  const getCanvasDimensions = () => {
    let width = 1000;
    switch (device) {
      case 'mobile':
        width = 375;
        break;
      case 'tablet':
        width = 768;
        break;
      default:
        width = 1000;
    }
    
    return `${width} x ${canvas.height}px`;
  };
  
  return (
    <footer className="bg-background border-t border-border px-4 py-1.5 text-sm text-muted-foreground flex justify-between">
      <div>
        {selectedElement ? (
          <>Selected: <span className="font-medium capitalize">{selectedElement.type}</span></>
        ) : (
          'No element selected'
        )}
      </div>
      <div className="flex items-center">
        <span className="mr-4">Canvas: {getCanvasDimensions()}</span>
        <span>Device: {device}</span>
      </div>
    </footer>
  );
}
