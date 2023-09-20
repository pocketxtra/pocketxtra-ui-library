import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RangeSelectorInterface } from "../../interface/rangePicker/RangeSelectorInterface"
import RangeSlider from "react-native-range-slider-expo";
import { Colors } from "../../theme/ColorsConstant";

export const RangeSelector: React.FC<RangeSelectorInterface> = ({
  minRange = 0,
  maxRange = 100,
  inRangeBarColor = Colors.iconColor,
  toKnobColor = Colors.textColor,
  fromKnobColor = Colors.outlineColor,
  outOfRangeBarColor = Colors.borderColor,
  rangeLabelsTextColor = Colors.outlineColor,
  styleSize = "small",
  fromValueOnChange,
  toValueOnChange,
}) => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
    sliderContainer: {
      width: "100%",
    },
  });

  const handleFromValueChange = (value) => {
    setFromValue(value);
    if (fromValueOnChange) {
      fromValueOnChange(value);
    }
  };

  const handleToValueChange = (value) => {
    setToValue(value);
    if (toValueOnChange) {
      toValueOnChange(value);
    }
  };

  return (
    <View style={styles.container}>
      <RangeSlider
        min={minRange}
        max={maxRange}
        fromValueOnChange={handleFromValueChange}
        toValueOnChange={handleToValueChange}
        initialFromValue={0}
        styleSize={styleSize}
        containerStyle={styles.sliderContainer}
        inRangeBarColor={inRangeBarColor}
        toKnobColor={toKnobColor}
        fromKnobColor={fromKnobColor}
        outOfRangeBarColor={outOfRangeBarColor}
        rangeLabelsTextColor={rangeLabelsTextColor}
      />
    </View>
  );
};
