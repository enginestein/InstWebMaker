// Element types
export type ElementType = 
  'container' | 
  'row' | 
  'column' | 
  'text' | 
  'heading' | 
  'image' | 
  'button' | 
  'input' | 
  'textarea' | 
  'checkbox' | 
  'radio' | 
  'spacer' | 
  'divider' | 
  'icon' | 
  'link' | 
  'video' |
  'form';

// Device types for responsive preview
export type DeviceType = 'desktop' | 'tablet' | 'mobile';

// Style properties that can be applied to elements
export interface ElementStyle {
  width?: string | number;
  height?: string | number;
  padding?: string;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  color?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  borderRadius?: string | number;
  border?: string;
  borderWidth?: string | number;
  borderStyle?: string;
  borderColor?: string;
  display?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  gap?: string | number;
  opacity?: number;
  boxShadow?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  overflow?: string;
  transform?: string;
  transition?: string;
  aspectRatio?: string | number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textDecoration?: string;
  cursor?: string;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  flex?: string | number;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string | number;
}

// Base Element interface
export interface Element {
  id: string;
  type: ElementType;
  content?: string;
  style?: ElementStyle;
  attributes?: Record<string, string>;
  children?: Element[];
  parentId?: string;
  isDroppable?: boolean;
  isDraggable?: boolean;
  className?: string;
  src?: string;
  alt?: string;
  href?: string;
  placeholder?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  rows?: number;
  cols?: number;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  accept?: string;
  maxLength?: number;
  minLength?: number;
  max?: string | number;
  min?: string | number;
  step?: string | number;
  pattern?: string;
  autoComplete?: string;
  defaultValue?: string;
  label?: string;
  options?: { value: string; label: string }[];
}

// Canvas to hold all elements
export interface Canvas {
  id: string;
  width: number;
  height: number;
  children: Element[];
  backgroundColor?: string;
}

// History for undo/redo
export interface BuilderHistory {
  states: Canvas[];
  currentIndex: number;
}

// Element library item
export interface ElementLibraryItem {
  type: ElementType;
  icon: string;
  label: string;
  defaultProps: Partial<Element>;
  category: 'layout' | 'basic' | 'form' | 'content';
}
