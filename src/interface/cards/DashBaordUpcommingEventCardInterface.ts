export interface DashBaordUpcommingEventCardInterface{
    width?: number,
    height?: number,
    eventName?: string,
    textColor?: string,
    eventDate?: string,
    colorDark?: string,
    companyName?: string,
    borderRadius?: number,
    imageSource?: ImageSource,
    eventColor?: string,
    eventNameSize?: number,
    eventDateTextColor?: string,
    eventDateTextSize?: number,
    companyNameTextSize?: number,
}

interface ImageSource {
    uri?: string; 
}