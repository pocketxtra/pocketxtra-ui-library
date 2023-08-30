export interface RadioButtonComponentInterface {
  options?: Option[];
  checkedColor?: string;
  uncheckedColor?: string;
  marginVertical?: number;
  containerStyle?: any;
  textFontSize?: number;
  textColor?: string;
  headingTextColor?: string;
  title?: string;
  fontWeight?: string;
  flexDirections?: string;
  textPadding?: number;
  optionFontSize?: number;
  optionMarginLeft?: number;
  unSelectedColor?: string;
  onValueChange: (value: string) => void;
}

interface Option {
  label: string;
  value: string;
}
