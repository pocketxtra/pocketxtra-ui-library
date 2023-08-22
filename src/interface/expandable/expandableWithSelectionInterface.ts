export interface ExpandableWithSelectionInterface{
    icon?: string,
    iconInfo?: string,
    title?: string,
    expandableParagraph?: string,
    userRole?: string,
    successButtonColor?: string,
    width?: number,
    height?: number,
    borderRadius?: number,
    borderWidth?: number,
    expandablebackgroundColour?: string,
    fontSize?: number,
    iconSize?: number,
    iconColor?: string,
    expandableTextSize?: number,
    textColor?: string,
    borderColor?: string,
    expandableTextColor?: string
    imageSource?: ImageSource,
    fontFamily?: string,
    imageSize?: number,
    buttonBgColor?: string,
    buttonTextColor?: string,
    infoIconColor?: string,
}

interface ImageSource {
    uri?: string; 
    path?: string; 
}