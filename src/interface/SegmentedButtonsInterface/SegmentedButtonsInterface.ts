 
 export interface SegmentedButtonsInterface {
  segments: { value: string; label: string }[];
  selectedColor?: string;
  unselectedColor?: string;
  containerStyle?: any; 
  theme?: any; 
  onChange: (value: string) => void;
}