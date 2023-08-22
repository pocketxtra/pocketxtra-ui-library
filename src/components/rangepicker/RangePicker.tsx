import React, { useState } from "react";
import { View, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { responsiveWidth } from "react-native-responsive-dimensions";
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
}) => {
  const [values, setValues] = useState([initialMinValue, initialMaxValue]);

  const onValuesChange = (newValues) => {
    setValues(newValues);
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
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: responsiveWidth(buttonBorderRadius),
            padding: responsiveWidth(textPadding),
          }}
        >{`Min Value: ${values[0]}`}</Text>
        <View style={{ width: responsiveWidth(spaceBetweenButton) }} />
        <Text
          style={{
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: responsiveWidth(buttonBorderRadius),
            padding: responsiveWidth(textPadding),
          }}
        >{`Max Value: ${values[1]}`}</Text>
      </View>
    </View>
  );
};
