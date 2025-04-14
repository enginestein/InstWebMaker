import { useCallback } from 'react';
import { Canvas, Element } from '@/components/elements/ElementTypes';
import { saveAs } from 'file-saver';
import { generateHtml, generateCss, generateFullHtml } from '@/lib/htmlGenerator';

export function useExport() {
  // Export the canvas as HTML and CSS files
  const exportAsHtmlCss = useCallback((canvas: Canvas, filename = 'website') => {
    try {
      // Generate HTML and CSS
      const htmlContent = generateHtml(canvas);
      const cssContent = generateCss(canvas);
      
      // Create Blobs for the files
      const htmlBlob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const cssBlob = new Blob([cssContent], { type: 'text/css;charset=utf-8' });
      
      // Save the files
      saveAs(htmlBlob, `${filename}.html`);
      saveAs(cssBlob, `${filename}.css`);
      
      return true;
    } catch (error) {
      console.error('Failed to export as HTML/CSS:', error);
      return false;
    }
  }, []);
  
  // Export as a single HTML file with embedded CSS
  const exportAsSingleHtml = useCallback((canvas: Canvas, filename = 'website') => {
    try {
      // Generate full HTML with embedded CSS
      const fullHtml = generateFullHtml(canvas);
      
      // Create Blob for the file
      const htmlBlob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      
      // Save the file
      saveAs(htmlBlob, `${filename}.html`);
      
      return true;
    } catch (error) {
      console.error('Failed to export as single HTML:', error);
      return false;
    }
  }, []);
  
  return {
    exportAsHtmlCss,
    exportAsSingleHtml
  };
}
