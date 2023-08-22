
interface Option {
    label: string;
    value: string;
  }
   export interface RadioButtonComponentProps {
    options?: Option[];
    checkedColor?: string;
    uncheckedColor?: string;
    status?: string
    containerStyle?: any;
    textfontSize?: number;
    title?: string;
    marginBottom?: number;
    fontWeight?: string 
    direction?: string 
    textPadding ?: number
  }