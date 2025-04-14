import { Canvas, Element, ElementStyle } from '@/components/elements/ElementTypes';

// Convert a style object to CSS string
function styleObjectToCss(style: ElementStyle | undefined): string {
  if (!style) return '';
  
  // Convert camelCase to kebab-case
  const kebabCase = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  
  return Object.entries(style)
    .map(([key, value]) => {
      // Skip undefined or null values
      if (value === undefined || value === null) return '';
      
      // Add unit to numeric values if needed
      if (typeof value === 'number' && 
          !['zIndex', 'fontWeight', 'opacity', 'flex', 'flexGrow', 'flexShrink'].includes(key)) {
        value = `${value}px`;
      }
      
      return `${kebabCase(key)}: ${value};`;
    })
    .filter(Boolean)
    .join(' ');
}

// Generate a CSS class from an element
function generateCssClass(element: Element): string {
  if (!element.style) return '';
  
  return `.el-${element.id} {\n  ${styleObjectToCss(element.style)}\n}\n`;
}

// Generate all CSS from canvas elements
export function generateCss(canvas: Canvas): string {
  let css = `/* Reset and Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #1e293b;
  background-color: ${canvas.backgroundColor || '#f8fafc'};
  min-height: 100vh;
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: #0ea5e9;
}

button {
  cursor: pointer;
  font-family: inherit;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0.5em;
  line-height: 1.2;
}

p {
  margin-bottom: 1em;
}

/* Container base styles */
.el-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Form elements */
input, textarea, select {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  width: 100%;
}

/* Custom element styles */
`;

  // Collect all elements recursively
  const collectElements = (elements: Element[]): Element[] => {
    return elements.reduce((acc: Element[], element) => {
      acc.push(element);
      if (element.children && element.children.length > 0) {
        acc.push(...collectElements(element.children));
      }
      return acc;
    }, []);
  };

  const allElements = collectElements(canvas.children);
  
  // Generate CSS for each element
  allElements.forEach(element => {
    const classStyles = generateCssClass(element);
    if (classStyles) {
      css += classStyles;
    }
  });
  
  return css;
}

// Generate element's HTML based on its type
function generateElementHtml(element: Element, indentation = ''): string {
  const attributes: Record<string, string> = {
    class: `el-${element.id}${element.className ? ` ${element.className}` : ''}`,
    ...(element.attributes || {}),
  };
  
  // Build attributes string - we're removing style from here as we'll use CSS classes
  const attributesString = Object.entries(attributes)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}="${value.replace(/"/g, '&quot;')}"`)
    .join(' ');

  // Generate different HTML based on element type
  switch (element.type) {
    case 'container':
      return `${indentation}<div ${attributesString}>\n${(element.children || [])
        .map(child => generateElementHtml(child, `${indentation}  `))
        .join('\n')}\n${indentation}</div>`;
      
    case 'row':
      return `${indentation}<div ${attributesString}>\n${(element.children || [])
        .map(child => generateElementHtml(child, `${indentation}  `))
        .join('\n')}\n${indentation}</div>`;
      
    case 'column':
      return `${indentation}<div ${attributesString}>\n${(element.children || [])
        .map(child => generateElementHtml(child, `${indentation}  `))
        .join('\n')}\n${indentation}</div>`;
        
    case 'text':
      return `${indentation}<p ${attributesString}>${element.content || ''}</p>`;
      
    case 'heading':
      // Determine heading level based on font size
      const fontSize = element.style?.fontSize;
      let headingTag = 'h2';
      if (fontSize) {
        const size = typeof fontSize === 'string' 
          ? parseInt(fontSize) 
          : fontSize;
        
        if (size >= 36) headingTag = 'h1';
        else if (size >= 24) headingTag = 'h2';
        else if (size >= 20) headingTag = 'h3';
        else if (size >= 18) headingTag = 'h4';
        else if (size >= 16) headingTag = 'h5';
        else headingTag = 'h6';
      }
      return `${indentation}<${headingTag} ${attributesString}>${element.content || ''}</${headingTag}>`;
      
    case 'image':
      return `${indentation}<img src="${element.src || ''}" alt="${element.alt || ''}" ${attributesString} />`;
      
    case 'button':
      return `${indentation}<button ${attributesString}>${element.content || 'Button'}</button>`;
      
    case 'input':
      return `${indentation}<div ${attributesString.replace(/el-[^ "]+/, '')}>
${element.label ? `${indentation}  <label for="input-${element.id}">${element.label}</label>\n` : ''}${indentation}  <input id="input-${element.id}" type="${element.attributes?.type || 'text'}" placeholder="${element.placeholder || ''}" ${attributesString} />
${indentation}</div>`;
      
    case 'textarea':
      return `${indentation}<div ${attributesString.replace(/el-[^ "]+/, '')}>
${element.label ? `${indentation}  <label for="textarea-${element.id}">${element.label}</label>\n` : ''}${indentation}  <textarea id="textarea-${element.id}" placeholder="${element.placeholder || ''}" rows="${element.rows || 4}" ${attributesString}>${element.content || ''}</textarea>
${indentation}</div>`;
      
    case 'form':
      return `${indentation}<form ${attributesString}>\n${(element.children || [])
        .map(child => generateElementHtml(child, `${indentation}  `))
        .join('\n')}\n${indentation}</form>`;
      
    case 'divider':
      return `${indentation}<hr ${attributesString} />`;
      
    case 'link':
      return `${indentation}<a href="${element.href || '#'}" ${attributesString}>${element.content || 'Link'}</a>`;
      
    case 'spacer':
      return `${indentation}<div ${attributesString}></div>`;
      
    default:
      return `${indentation}<div ${attributesString}>${element.content || ''}</div>`;
  }
}

// Generate HTML for entire canvas
export function generateHtml(canvas: Canvas): string {
  const bodyContent = canvas.children
    .map(element => generateElementHtml(element, '  '))
    .join('\n');
    
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
${bodyContent}
</body>
</html>`;
}

// Generate complete HTML with embedded CSS
export function generateFullHtml(canvas: Canvas, isPretty = false): string {
  const css = generateCss(canvas);
  const bodyContent = canvas.children
    .map(element => generateElementHtml(element, '  '))
    .join('\n');
  
  // If this is for preview/display, make the HTML code more readable
  const formattedCss = isPretty 
    ? css.split('\n').map(line => `    ${line}`).join('\n')
    : css;
    
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
${formattedCss}
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}
