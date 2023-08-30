import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { DropDownInterface } from "../../interface/DropDown/DropDownInterface";
import { Colors } from "../../theme/ColorsConstant";

export const CustomDropDownComponent: React.FC<DropDownInterface> = ({
  height = 10,
  width = 100,
  backgroundColor = Colors.backgroundColor,
  borderRadius = 1,
  options,
  selectedLabel,
  optionsMargin = 0.1,
  textColor = Colors.textColor,
  iconColor = Colors.iconColor,
  iconSize = 2,
  selectedOptionFontSize = 5,
  optionFontSize = 5,
  marginBottomMain = 0.1,
  onValueChange,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const onSelectItem = (item: string) => {
    setSelectedItem(item);
    setShowOptions(false);
  };

  const handleValueChange = (value: any) => {
    onValueChange(value);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          padding: responsiveHeight(1),
          height: responsiveHeight(height),
          width: responsiveWidth(width),
          borderRadius: responsiveHeight(borderRadius),
          marginBottom: responsiveHeight(marginBottomMain),
        }}
        activeOpacity={0.8}
        onPress={toggleOptions}
      >
        <Text
          style={{
            color: textColor,
            fontSize: responsiveWidth(selectedOptionFontSize),
          }}
        >
          {selectedItem || selectedLabel}
        </Text>
        <Icon
          style={{
            transform: [{ rotate: showOptions ? "180de" : "0deg" }],
            color: iconColor,
          }}
          name="arrow-drop-down"
          size={responsiveWidth(iconSize)}
        />
      </TouchableOpacity>
      {showOptions && (
        <View style={{ position: "absolute", top: "100%" }}>
          {options?.map((option, i) => (
            <TouchableOpacity
              style={{
                backgroundColor: backgroundColor,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                padding: responsiveHeight(1),
                height: responsiveHeight(height),
                width: responsiveWidth(width),
                borderRadius: responsiveHeight(borderRadius),
                margin: responsiveWidth(optionsMargin),
              }}
              key={i}
              onPress={() => {
                onSelectItem(option.name);
                handleValueChange(option.name);
              }}
            >
              <Text
                key={String(i)}
                style={{
                  color: textColor,
                  fontSize: responsiveWidth(optionFontSize),
                }}
              >
                {option.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
