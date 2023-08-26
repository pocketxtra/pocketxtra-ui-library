import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { WorkDayPreferenceInterface } from "../../interface/workday/WorkDayPreferenceInterface";
import { Colors } from "../../theme/ColorsConstant";

export const WorkDayPreference: React.FC<
  WorkDayPreferenceInterface & { onPress?: (day:string) => void }
> = ({
  WorkDayHeight = 20,
  WorkDayWidth = 20,
  WorkDayBorderRadius = 10,
  WorkDayTitle = "",
  WorkDayTitleColor = Colors.textColor,
  WorkDayBorderWidth = 2,
  WorkDayBorderColor = Colors.borderColor,
  WorkDayBackgroundColor = Colors.backgroundColor,
  WorkDayFontSize = 2,
  WorkDaySelectedTitleColor=Colors.backgroundColor,
  WorkDaySelectedBorderColor=Colors.backgroundColor,
  WorkDaySelectedBackgroundColor=Colors.textColor,
  onPress = () => {},
}) => {
  const [selected, setSelected] = useState(false);

  const style = StyleSheet.create({
    WorkDayContainer: {
      width: responsiveWidth(WorkDayWidth),
      height: responsiveWidth(WorkDayHeight),
      backgroundColor: selected?WorkDaySelectedBackgroundColor:WorkDayBackgroundColor,
      borderWidth: responsiveWidth(WorkDayBorderWidth),
      borderColor: selected?WorkDaySelectedBorderColor:WorkDayBorderColor,
      borderRadius: responsiveWidth(WorkDayBorderRadius),
      justifyContent: "center",
      alignItems: "center",
    },
    WorkDayTitleStyle: {
      color: selected?WorkDaySelectedTitleColor:WorkDayTitleColor,
      fontSize: responsiveFontSize(WorkDayFontSize),
      textAlign: "center",
    },
  });

  const WorkDaySelection = () => {
    setSelected(!selected);
    if(selected){
        onPress("")
    }else{
        onPress(WorkDayTitle)
    }
  };

  return (
    <Pressable style={style.WorkDayContainer} onPress={WorkDaySelection}>
      <Text style={style.WorkDayTitleStyle}>{WorkDayTitle}</Text>
    </Pressable>
  );
};
