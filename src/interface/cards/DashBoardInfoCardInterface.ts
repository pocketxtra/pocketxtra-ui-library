export interface DashBoardInfoCardInterface{
    width?: number,
    height?: number,
    EventName?: string,
    color?: string,
    EventDate?: string,
    colorDark?: string,
    CompanyName?: string,
    borderRadius?: number,
    imageSource?: ImageSource,
    fontFamily?: string,
    EventColor?: string
}

interface ImageSource {
    uri?: string; 
    path?: string; 
  }