interface DropdownOption {
  name: string;
}

export interface DropDownInterface {
  height?: number;
  width?: number;
  backgroundColor?: string;
  borderRadius?: number;
  options?: DropdownOption[];
  selectedLabel?: string;
  optionsMargin?: number;
  textColor?: string;
  iconColor?: string;
  iconSize?: number;
  selectedOptionFontSize?: number;
  optionFontSize?: number;
  marginBottomMain?: number;
  onValueChange: (value: string) => void;
}
