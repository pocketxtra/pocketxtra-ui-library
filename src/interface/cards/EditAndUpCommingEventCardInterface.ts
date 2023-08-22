export interface EditAndUpCommingEventCardInterface{
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
    descriptionTextSize?: number,
    eventName?: string,
    eventTextColor?: string,
    eventDescription?: string,
    eventDateFontSize?: number
}

interface ImageSource {
    uri?: string; 
}