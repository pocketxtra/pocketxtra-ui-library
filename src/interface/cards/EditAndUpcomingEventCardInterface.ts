export interface EditAndUpcomingEventCardInterface{
    eventDate?: string,
    eventLocation?: string,
    category?: string,
    company?: string,
    textColor?: string,
    height?: number,
    width?: number,
    eventStatus?: string
    companyName?: string,
    borderRadius?: number,
    fontSize?: number
    imageSource?: ImageSource,
    descriptionFontSize?: number,
    eventName?: string,
    eventTextColor?: string,
    eventDescription?: string,
    eventDateFontSize?: number,
    blurSectionborderRadius?: number,
    blurIntensity?: number,
    fontFamily?: string
}

interface ImageSource {
    uri?: string; 
}