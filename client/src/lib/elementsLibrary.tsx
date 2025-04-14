import { ElementLibraryItem, Element, ElementType } from '@/components/elements/ElementTypes';
import { Container } from '@/components/elements/canvas/Container';
import { Row } from '@/components/elements/canvas/Row';
import { Column } from '@/components/elements/canvas/Column';
import { Heading } from '@/components/elements/canvas/Heading';
import { Text } from '@/components/elements/canvas/Text';
import { Button } from '@/components/elements/canvas/Button';
import { Image } from '@/components/elements/canvas/Image';
import { Input } from '@/components/elements/canvas/Input';
import { Textarea } from '@/components/elements/canvas/Textarea';
import { Form } from '@/components/elements/canvas/Form';
import { Divider } from '@/components/elements/canvas/Divider';

// Element library for draggable elements
export const elementsLibrary: ElementLibraryItem[] = [
  {
    type: 'container',
    icon: 'widgets',
    label: 'Container',
    category: 'layout',
    defaultProps: {
      type: 'container',
      children: [],
      isDroppable: true,
      style: {
        padding: '16px',
        border: '1px dashed hsl(var(--muted))',
        backgroundColor: 'white',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'row',
    icon: 'view_column',
    label: 'Row',
    category: 'layout',
    defaultProps: {
      type: 'row',
      children: [],
      isDroppable: true,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '-8px',
        marginRight: '-8px',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'column',
    icon: 'view_stream',
    label: 'Column',
    category: 'layout',
    defaultProps: {
      type: 'column',
      children: [],
      isDroppable: true,
      style: {
        flex: '0 0 50%',
        padding: '0 8px',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'spacer',
    icon: 'space_bar',
    label: 'Spacer',
    category: 'layout',
    defaultProps: {
      type: 'spacer',
      style: {
        height: '32px',
        width: '100%',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'text',
    icon: 'text_fields',
    label: 'Text',
    category: 'basic',
    defaultProps: {
      type: 'text',
      content: 'This is a paragraph of text. You can edit this text to add your own content.',
      style: {
        fontSize: '16px',
        color: 'hsl(var(--foreground))',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'heading',
    icon: 'title',
    label: 'Heading',
    category: 'basic',
    defaultProps: {
      type: 'heading',
      content: 'Heading Text',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'hsl(var(--foreground))',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'image',
    icon: 'image',
    label: 'Image',
    category: 'basic',
    defaultProps: {
      type: 'image',
      src: '',
      alt: 'Image',
      style: {
        width: '100%',
        height: 'auto',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'button',
    icon: 'smart_button',
    label: 'Button',
    category: 'basic',
    defaultProps: {
      type: 'button',
      content: 'Button',
      style: {
        backgroundColor: 'hsl(var(--primary))',
        color: 'white',
        padding: '8px 24px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'input',
    icon: 'input',
    label: 'Input',
    category: 'form',
    defaultProps: {
      type: 'input',
      placeholder: 'Enter text here',
      label: 'Input Label',
      style: {
        width: '100%',
        padding: '8px',
        border: '1px solid hsl(var(--muted))',
        borderRadius: '4px',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'textarea',
    icon: 'text_snippet',
    label: 'Textarea',
    category: 'form',
    defaultProps: {
      type: 'textarea',
      placeholder: 'Enter text here',
      label: 'Textarea Label',
      rows: 4,
      style: {
        width: '100%',
        padding: '8px',
        border: '1px solid hsl(var(--muted))',
        borderRadius: '4px',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'form',
    icon: 'view_list',
    label: 'Form',
    category: 'form',
    defaultProps: {
      type: 'form',
      children: [],
      isDroppable: true,
      style: {
        border: '1px solid hsl(var(--muted))',
        padding: '16px',
        borderRadius: '6px',
        marginBottom: '16px',
      }
    }
  },
  {
    type: 'divider',
    icon: 'horizontal_rule',
    label: 'Divider',
    category: 'content',
    defaultProps: {
      type: 'divider',
      style: {
        marginTop: '16px',
        marginBottom: '16px',
        borderColor: 'hsl(var(--muted))',
        borderWidth: '1px',
      }
    }
  },
  {
    type: 'link',
    icon: 'link',
    label: 'Link',
    category: 'content',
    defaultProps: {
      type: 'link',
      content: 'Link Text',
      href: '#',
      style: {
        color: 'hsl(var(--primary))',
        textDecoration: 'none',
        marginBottom: '16px',
      }
    }
  },
];

// Function to render elements based on their type
export function renderElement(element: Element, index?: number) {
  switch (element.type) {
    case 'container':
      return <Container key={element.id} element={element} index={index} />;
    case 'row':
      return <Row key={element.id} element={element} index={index} />;
    case 'column':
      return <Column key={element.id} element={element} index={index} />;
    case 'text':
      return <Text key={element.id} element={element} index={index} />;
    case 'heading':
      return <Heading key={element.id} element={element} index={index} />;
    case 'button':
      return <Button key={element.id} element={element} index={index} />;
    case 'image':
      return <Image key={element.id} element={element} index={index} />;
    case 'input':
      return <Input key={element.id} element={element} index={index} />;
    case 'textarea':
      return <Textarea key={element.id} element={element} index={index} />;
    case 'form':
      return <Form key={element.id} element={element} index={index} />;
    case 'divider':
      return <Divider key={element.id} element={element} index={index} />;
    // Add more element types as needed
    default:
      return <div key={element.id}>Unsupported element type: {element.type}</div>;
  }
}
