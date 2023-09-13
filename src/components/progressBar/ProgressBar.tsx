import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ProgressBarComponentInterface } from "../../interface/ProgressbarInterface/ProgressBar";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Slider from "@react-native-community/slider";
import { Colors } from "../../theme/ColorsConstant";

export const ProgressBarComponent: React.FC<
  ProgressBarComponentInterface & { changeValue: (text: string) => void }
> = ({
  minimumValue,
  maximumValue,
  step,
  userValue = 0,
  textColor = Colors.textColor,
  textFontSize = 2,
  textMarginBottom = 2,
  sliderStyle,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor = "yellow",
  changeValue = () => {},
  stepSize = 5
}) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (userValue) {
      setValue(userValue);
    }
  }, [userValue]);

  const onValueChange = (newValue) => {
    setValue(newValue);
    changeValue(newValue);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: textColor,
          fontSize: responsiveHeight(textFontSize),
          marginBottom: responsiveHeight(textMarginBottom),
        }}
      >
        {value >= maximumValue
          ? `more than ${maximumValue}`
          : `Size : ${Math.round(value)}`}
      </Text>
      <Slider
        style={{ width: responsiveWidth(100), ...sliderStyle }}
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        step={step}
        thumbTintColor={thumbTintColor}
        onValueChange={onValueChange}
        step = {stepSize}
      />
    </View>
  );
};
