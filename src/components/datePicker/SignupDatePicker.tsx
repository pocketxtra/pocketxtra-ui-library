import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SignupDatePickerInterface } from "../../interface/datePicker/SignupDatePickerInterface";
import { Colors } from "../../theme/ColorsConstant";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const SignupDatePicker: React.FC<
  SignupDatePickerInterface & { onPress?: (date: string) => void }
> = ({
  width = 20,
  height = 20,
  backgroundColor = Colors.backgroundColor,
  iconSize = 8,
  iconColor = Colors.iconColor,
  borderColor = Colors.borderColor,
  borderRadius = 5,
  borderWidth = 2,
  onPress = () => {},
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  const style = StyleSheet.create({
    container: {
      width: responsiveWidth(width),
      height: responsiveWidth(height),
      borderRadius: responsiveWidth(borderRadius),
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      marginTop: responsiveWidth(marginTop),
      marginBottom: responsiveWidth(marginBottom),
      marginLeft: responsiveWidth(marginLeft),
      marginRight: responsiveWidth(marginRight),
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [PickedDate, setPickedDate] = useState("");

  const handleDateConfirm = (date) => {
    let tempDate = date.toISOString().split("T")[0];
    console.log("Formatted :", tempDate);
    setPickedDate(tempDate);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  useEffect(() => {
    if (PickedDate !== "") {
      onPress(PickedDate);
    }
  }, [PickedDate]);

  return (
    <View style={style.container}>
      <Icon
        name="calendar-month"
        color={iconColor}
        size={responsiveWidth(iconSize)}
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
