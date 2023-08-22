 interface DropdownOption {
  name: string;
}
 export interface DropDownProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  borderRadius?: number;
  Coordinators?: DropdownOption[];
  selectedLabel?: string;
  margin?:number,
  textColor : string,
  iconColor : string,
  iconsize : number
}
