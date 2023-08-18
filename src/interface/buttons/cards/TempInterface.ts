export interface OrgEventInfoCardInterface{
    EventDate?: string,
    EventLocation?: string,
    Category?: string,
    Company?: string,
    Eventdes?: string,
    fontFamily?: string,
    color?: string,
    height?: number,
    width?: number,
    EventStatus?: string
    CompanyName?: string,
    borderRadius?: number,
    fontSize?: number
    imageSource?: ImageSource
}

interface ImageSource {
    uri?: string; 
    path?: string; 
  }