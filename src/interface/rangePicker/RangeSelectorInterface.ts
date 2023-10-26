export interface RangeSelectorInterface{
    minRange?: number,
    maxRange?: number,
    inRangeBarColor?: string,
    toKnobColor?: string,
    fromKnobColor?: string,
    outOfRangeBarColor?: string,
    rangeLabelsTextColor?: string,
    styleSize?: string,
    fromValueOnChange?: (value: number) => void;
    toValueOnChange?: (value: number) => void;
}