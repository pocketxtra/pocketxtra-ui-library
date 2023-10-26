import React, { useState } from "react";
import { View, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { responsiveWidth , responsiveHeight } from "react-native-responsive-dimensions";
import { RangePickerInterface } from "../../interface/rangePicker/RangePicker";
import { Colors } from "../../theme/ColorsConstant";

export const RangePickerComponent: React.FC<RangePickerInterface> = ({
  sliderLength,
  min,
  max,
  step,
  backgroundColor = Colors.backgroundColor,
  buttonBorderRadius = 5,
  color = Colors.textColor,
  trackStyling,
  selectedStyling,
  markerStyling,
  initialMinValue = 1,
  initialMaxValue = 9,
  textPadding = 2,
  spaceBetweenButton = 30,
  textFontSize = 3,
  textWidth = 24,
  textHeight = 5,
  textStyling,
  pressedMarkerStyle,
   onChange
}) => {
  const [values, setValues] = useState([initialMinValue, initialMaxValue]);

  const onValuesChange = (newValues) => {
    setValues(newValues);
    onChange(newValues)
    
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <MultiSlider
        values={values}
        sliderLength={sliderLength}
        onValuesChange={onValuesChange}
        min={min}
        max={max}
        step={step}
        trackStyle={trackStyling}
        selectedStyle={selectedStyling}
        markerStyle={markerStyling}
        pressedMarkerStyle={pressedMarkerStyle}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ backgroundColor:  backgroundColor, textAlign : "center",color:  color, borderRadius: responsiveWidth(buttonBorderRadius),padding: responsiveWidth(textPadding) , fontSize : responsiveWidth(textFontSize) , width : responsiveWidth(textWidth) , height : responsiveHeight(textHeight) , ...textStyling }}>{`Min Value: ${values[0]}`}</Text>
        <View style={{ width: responsiveWidth(spaceBetweenButton) }} />
        <Text style={{backgroundColor: backgroundColor,color: color,textAlign : "center",borderRadius: responsiveWidth(buttonBorderRadius),padding: responsiveWidth(textPadding) , fontSize : responsiveWidth(textFontSize) , width : responsiveWidth(textWidth) , height : responsiveHeight(textHeight) , ...textStyling}}>{`Max Value: ${values[1]}`}</Text>
      </View>
    </View>
  );
};
