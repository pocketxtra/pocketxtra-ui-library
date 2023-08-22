import React, { useState } from "react";
import { View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { SegmentedButtonsInterface } from "../../interface/SegmentedButtonsInterface/SegmentedButtonsInterface";

export const CustomSegmentedButtonsComponent: React.FC<
  SegmentedButtonsInterface
> = ({ segments, containerStyle, theme, onChange }) => {
  const [value, setValue] = useState<string>("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={segments}
        theme={theme}
      />
    </View>
  );
};
