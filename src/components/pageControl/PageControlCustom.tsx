import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PageControlCustomInterface } from "../../interface/pageControl/PageControlCustomInterface";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Colors } from "../../theme/ColorsConstant";

export const PageControlCustom: React.FC<PageControlCustomInterface> = ({
  numberofPages = 3,
  PageControlHeight = 3,
  PageControlWidth = 100,
  PageCircleWidth = 2,
  PageCricleHeight = 2,
  PageCircleBorderRadius = 1,
  PageControlBorderRadius = 5,
  marginBottomPageControl = 0,
  marginTopPageControl = 0,
  marginTopPageCircle = 0,
  marginBottomPageCircle = 0,
  marginLeftPageCircle = 2,
  marginRightPageCircle = 2,
  PageCircleBackgroundColor = Colors.iconColor,
  PageControlBackgroundColor = Colors.backgroundColor,
  ActivePageCircle = 1,
  ActivePageCircleColor = Colors.iconColor,
}) => {
  const style = StyleSheet.create({
    pageControlContainer: {
      width: responsiveWidth(PageControlWidth),
      height: responsiveHeight(PageControlHeight),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: PageControlBackgroundColor,
      marginBottomPageControl: responsiveWidth(marginBottomPageControl),
      marginTopPageControl: responsiveWidth(marginTopPageControl),
      borderRadius: responsiveWidth(PageControlBorderRadius),
    },
    pageCircle: {
      width: responsiveWidth(PageCircleWidth),
      height: responsiveWidth(PageCricleHeight),
      borderRadius: responsiveWidth(PageCircleBorderRadius),
      backgroundColor: PageCircleBackgroundColor,
      marginTop: responsiveWidth(marginTopPageCircle),
      marginBottom: responsiveWidth(marginBottomPageCircle),
      marginLeft: responsiveWidth(marginLeftPageCircle),
      marginRight: responsiveWidth(marginRightPageCircle),
    },
  });

  const pageCircles = Array.from({ length: numberofPages }, (_, index) => (
    <View
      key={index}
      style={[
        style.pageCircle,
        ActivePageCircle === index + 1
          ? { backgroundColor: ActivePageCircleColor }
          : null,
      ]}
    />
  ));

  return <View style={style.pageControlContainer}>{pageCircles}</View>;
};
