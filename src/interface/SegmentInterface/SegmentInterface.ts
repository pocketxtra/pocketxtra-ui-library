 export interface SegmentButtonProps {
    segments: { value: string; label: string }[];
    selectedColor?: string;
    unselectedColor?: string;
    containerStyle?: any; // You can define specific styles or use ViewStyle from 'react-native'
    theme?: any; // You can define specific theme options or use Theme from 'react-native-paper'
    onChange: (value: string) => void;
  }