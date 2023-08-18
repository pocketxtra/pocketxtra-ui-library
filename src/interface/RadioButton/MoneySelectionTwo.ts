import { Option } from "./MoneySelection";
export interface RadioButtonCompProps {
    options: Option[];
    checkedColor?: string;
    uncheckedColor?: string;
    containerStyle?: any;
    fontSize?: number;
    title?: string;
    fontWeight?: 'normal' | 'bold'; 
}