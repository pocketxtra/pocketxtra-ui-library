import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RadioButtonComponentInterface } from "../../interface/RadioButton/RadioButtonInterface";

export const CustomRadioButtonComponent: React.FC<
  RadioButtonComponentInterface
> = ({
  options,
  checkedColor,
  uncheckedColor,
  marginVertical = 2,
  containerStyle = {},
  textFontSize = 2,
  title,
  fontWeight,
  flexDirections,
  textPadding = 1,
  optionFontSize = 3,
  textColor = "blue",
  optionMarginLeft = 1,
  headingTextColor = "green",
  unSelectedColor = "green",
  onValueChange,
  value: propValue,
}) => {
  const [checked, setChecked] = useState<string>(propValue);

  const handleValueChange = (value: any) => {
    setChecked(value);
    onValueChange(value);
  };

  const optionContainerStyle =
    flexDirections === "row"
      ? { flexDirection: "row", justifyContent: "space-around" }
      : { flexDirection: "column" };

  useEffect(() => {
    setChecked(propValue);
  }, [propValue]);

  return (
    <View style={{ ...containerStyle }}>
      {title && (
        <Text
          style={{
            fontSize: responsiveHeight(textFontSize),
            fontWeight: fontWeight,
            textAlign: "center",
            padding: responsiveWidth(textPadding),
            alignSelf: "flex-start",
            color: headingTextColor,
          }}
        >
          {title}
        </Text>
      )}

      <View style={{ ...optionContainerStyle }}>
        {options?.map((option) => (
          <View
            key={option.value}
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginVertical: responsiveWidth(marginVertical),
            }}
          >
            <View
              style={{ borderColor: "white", borderWidth: 1, borderRadius: 20 }}
            >
              <RadioButton
                value={option.value}
                onPress={() => {
                  setChecked(option.value);
                  handleValueChange(option.value);
                }}
                color={checkedColor}
                uncheckedColor={uncheckedColor}
                status={checked === option.value ? "checked" : "unchecked"}
              />
            </View>
            <Text
              style={{
                color: checked == option.value ? textColor : unSelectedColor,
                fontSize: responsiveWidth(optionFontSize),
                marginLeft: responsiveWidth(optionMarginLeft),
              }}
            >
              {option.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
