
 
   export interface RadioButtonComponentInterface {
    options?: Option[];
    checkedColor?: string;
    uncheckedColor?: string;
    marginVertical?:number,
    containerStyle?: any;
    textfontSize?: number;
    title?: string;
    fontWeight?: string 
    direction?: string 
    textPadding?: number
  }

  interface Option {
    label: string;
    value: string;
  }