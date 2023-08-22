import React from "react";
import { Button } from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TertiaryButtonInterface } from "../../interface/buttons/TertiaryButtonInterface";
import { Colors } from "../../theme/ColorsConstant";

export const TertiaryButton: React.FC<
  TertiaryButtonInterface & { onPress?: () => void }
> = ({
  title = "",
  buttonColor = Colors.backgroundColor,
  height = 5,
  width = 100,
  fontSize = 2,
  color = Colors.textColor,
  borderColor = Colors.borderColor,
  borderRadius = 22,
  borderWidth = 2,
  icon = false,
  iconSize = 5,
  onPress = () => {},
  disabled = false,
  marginTopLabel = 0,
  marginBottomLabel = 0,
  marginLeftLabel = 0,
  marginRightLabel = 0,
  marginTopButton = 0,
  marginBottomButton = 0,
  marginLeftButton = 0,
  marginRightButton = 0,
  iconColor = Colors.iconColor,
}) => {
  return (
    <Button
      mode="contained"
      icon={
        icon
          ? ({ size, color }) => (
              <Icon
                name="verified"
                size={responsiveWidth(iconSize)}
                color={iconColor}
              />
            )
          : undefined
      }
      style={{
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: responsiveWidth(borderRadius),
        height: responsiveHeight(height),
        width: responsiveWidth(width),
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: buttonColor,
        marginTop: marginTopButton,
        marginBottom: marginBottomButton,
        marginLeft: marginLeftButton,
        marginRight: marginRightButton,
      }}
      labelStyle={{
        fontSize: responsiveFontSize(fontSize),
        textAlignVertical: "center",
        color: color,
        marginTop: responsiveWidth(marginTopLabel),
        marginBottom: responsiveWidth(marginBottomLabel),
        marginLeft: responsiveWidth(marginLeftLabel),
        marginRight: responsiveWidth(marginRightLabel),
      }}
      contentStyle={{ alignSelf: "center", flexDirection: "row-reverse" }}
      onPress={onPress}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};
