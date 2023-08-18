export interface expandableWithSelectionInterface{
    Icon?: string,
    IconInfo?: string,
    title?: string,
    expanablePara?: string,
    userRole?: string,
    successColor?: string,
    width?: number,
    height?: number,
    borderRadius?: number,
    borderWidth?: number,
    backgroundColour?: string,
    fontSize?: number,
    IconSize?: number,
    IconColor?: string,
    exTextSize?: number,
    textColor?: string,
    borderColor?: string,
    exTextColor?: string
    imageSource?: ImageSource,
    fontFamily?: string
}

interface ImageSource {
    uri?: string; 
    path?: string; 
  }