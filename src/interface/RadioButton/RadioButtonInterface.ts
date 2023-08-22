export interface RadioButtonComponentInterface {
  options?: Option[];
  checkedColor?: string;
  uncheckedColor?: string;
  marginVertical?: number;
  containerStyle?: any;
  textFontSize?: number;
  title?: string;
  fontWeight?: string;
  flexDirections?: string;
  textPadding?: number;
}

interface Option {
  label: string;
  value: string;
}
