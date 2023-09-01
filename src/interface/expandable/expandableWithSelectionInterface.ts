export interface ExpandableWithSelectionInterface{
  expandableBgColor?: string,
  themeBackgroundColor?: string,
  borderRadius?: number,
  width?: number,
  height?: number,
  title?: string,
  textColor?: string,
  textSize?: number,
  infoIcon?: string,
  mainIcon?: string,
  titleDescription?: string,
  imageSource?: ImageSource,
  imageHeight?: number,
  imageWidth?: number,
  successColor?: string,
  iconColor?: string,
  infoIconSize?: number,
  mainIconSize?: number,
  titleFontSize?: number,
  descriptionFontSize?: number,
  titleColor?: string,
  descriptionFontColor?: string,
  onSelected: () => void;
}

interface ImageSource {
  uri?: string; 
}