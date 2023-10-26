export interface RangePickerInterface {
  sliderLength?: number;
  min?: number;
  max?: number;
  step?: number;
  buttonBorderRadius?: number;
  backgroundColor?: string;
  color?: string;
  textPadding?: number;
  trackStyling?: object;
  selectedStyling?: object;
  markerStyling?: object;
  initialMinValue?: number;
  initialMaxValue?: number;
  spaceBetweenButton?: number;
  textFontSize?: number;
  textWidth?: number;
  textHeight?: number;
  textStyling?: object;
  pressedMarkerStyle?: object;
  onChange: (value: string) => void;
}
