import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { JobCardInterface } from "../../interface/cards/JobCardInterface";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Colors } from "../../theme/ColorsConstant";

export const JobCard: React.FC<JobCardInterface & { onPress?: () => void }> = ({
  title = "Position Name",
  titleColor = Colors.textColor,
  titleFontSize = 2,
  backgroundColor = Colors.backgroundColor,
  locationName = "Location",
  approvedText = "Approved",
  appliedText = "Applied",
  totalTotal = "Total",
  textColor = Colors.textColor,
  approvedNo = 0,
  appliedNo = 0,
  totalNo = 0,
  containerPadding = 25,
  buttonText = "Button",
  buttonColor = Colors.activeOutlineColor,
  buttonTextColor = Colors.outlineColor,
  buttonBorderColor = Colors.outlineColor,
  buttonWidth = 30,
  buttonHeight = 6,
  imageUri = "https://picsum.photos/700",
  height = 25,
  width = 85,
  borderRadius = 5,
  locationBoxWidth = 25,
  rowTwoWidth = 50,
  buttonTextSize = 1.6,
  fontFamily,
  buttonBorderWidth = 2,
  onPress = () => {},
  imageWidth = 18,
  imageHeight = 10,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      height: responsiveHeight(height),
      width: responsiveWidth(width),
      padding: containerPadding,
      borderRadius: responsiveWidth(borderRadius),
    },
    locationBox: {
      marginLeft: responsiveWidth(5),
      borderWidth: 2,
      borderColor: "#3A3A3A",
      borderRadius: 15,
      width: responsiveWidth(locationBoxWidth),
      textAlign: "center",
      color: Colors.textColor,
      justifyContent: "center",
      fontFamily: fontFamily,
    },
    flexDirection: {
      display: "flex",
      flexDirection: "row",
    },
    titleStyle: {
      color: titleColor,
      fontSize: responsiveFontSize(titleFontSize),
      fontFamily: fontFamily,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.flexDirection}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.locationBox}>{locationName}</Text>
      </View>

      <View style={styles.flexDirection}>
        <View style={{ paddingRight: responsiveWidth(4) }}>
          <View
            style={[
              styles.flexDirection,
              {
                justifyContent: "space-between",
                width: responsiveWidth(rowTwoWidth),
                marginTop: responsiveHeight(3),
              },
            ]}
          >
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {approvedText}
            </Text>
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {appliedText}
            </Text>
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {totalTotal}
            </Text>
          </View>

          <View
            style={[
              styles.flexDirection,
              {
                justifyContent: "space-between",
                width: responsiveWidth(rowTwoWidth),
              },
            ]}
          >
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {approvedNo}
            </Text>
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {appliedNo}
            </Text>
            <Text style={{ color: textColor, fontFamily: fontFamily }}>
              {totalNo}
            </Text>
          </View>
        </View>
        <View style={{
          height:responsiveHeight(10),
          width:responsiveWidth(20),
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image
            source={require("../../assests/working-time.png")}
            style={{
              height:responsiveHeight(10),
              width:responsiveWidth(20),
              resizeMode:'cover'
            }}
          />
        </View>
      </View>
      <View style={{ alignSelf: "flex-start" }}>
        <PrimaryButton
          title={buttonText}
          borderColor={buttonBorderColor}
          width={buttonWidth}
          height={buttonHeight}
          fontSize={buttonTextSize}
          color={buttonTextColor}
          buttonColor={buttonColor}
          borderWidth={buttonBorderWidth}
          onPress={onPress}
        />
      </View>
    </View>
  );
};
