import { DropdownOption } from "./DropDownInterface";

export interface DropDownProps {
    height?: number;
    width?: number;
    backgroundColor?: string;
    padding?: number;
    borderRadius?: number;
    marginTop?: number;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    Coordinators: DropdownOption[];
    selectedLabel?: string;
  }