export interface DashboardUpcomingEventCardInterface {
  width?: number;
  height?: number;
  eventName?: string;
  textColor?: string;
  eventDate?: string;
  colorDark?: string;
  companyName?: string;
  borderRadius?: number;
  imageSource?: ImageSource;
  eventColor?: string;
  eventNameSize?: number;
  eventDateTextColor?: string;
  eventDateTextSize?: number;
  companyNameTextSize?: number;
  intensity?: number;
  fontFamily?: string;

interface ImageSource {
  uri?: string;
}
