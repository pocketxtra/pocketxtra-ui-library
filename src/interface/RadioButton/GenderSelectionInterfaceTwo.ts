 import { Option } from "./GenderSlectionInterface";
 export interface RadioButtonCompProps {
    options: Option[];
    checkedColor?: string;
    uncheckedColor?: string;
    containerStyle?: any;
    fontSize?:number;
    title?: string;
    marginBottom?: number;
    fontWeight?: 'normal' | 'bold';
}