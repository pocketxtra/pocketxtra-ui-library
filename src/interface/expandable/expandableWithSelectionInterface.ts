export interface ExpandableWithSelectionInterface{
    icon?: string,
    iconInfo?: string,
    title?: string,
    expandableParagraph?: string,
    userRole?: string,
    successColor?: string,
    width?: number,
    height?: number,
    borderRadius?: number,
    borderWidth?: number,
    backgroundColour?: string,
    fontSize?: number,
    iconSize?: number,
    iconColor?: string,
    expandableTextSize?: number,
    textColor?: string,
    borderColor?: string,
    expandableTextColor?: string
    imageSource?: ImageSource,
    fontFamily?: string,
    imgSize?: number,
    buttonBgColor?: string,
    buttonTextColor?: string,
    infoIconColor?: string,
}

interface ImageSource {
    uri?: string; 
    path?: string; 
}