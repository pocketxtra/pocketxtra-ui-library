import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { UserCardInterface } from "../../interface/cards/UserCardInterface";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { Colors } from "../../theme/ColorsConstant";

export const UserCard: React.FC<UserCardInterface> = ({
   height = 22,
   width = 90,
   borderRadius = 8,
   backgroundColor = Colors.backgroundColor,
   name = "Crew Name",
   textColor = Colors.iconColor,
   fontFamily,
   nameFontSize = 1.8,
   locationFontSize = 1.6,
   buttonWidth = 20,
   buttonHeight = 5,
   buttonTitle = "Button",
   buttonColor = Colors.borderColor,
   buttonBorderColor = Colors.borderColor,
   buttonBorderWidth = 2,
   buttonFontSize = 1.2,
   buttonTextColor = Colors.textColor,
   locationText = "Location: Pune",
   eventText = "Event Attended 2",
   imageUri = "https://picsum.photos/700",
   imgWidth = 12,
   imgHight = 6,
   imgBorderRadius = 30,
   numberOfStars = 5,
   startColor = Colors.textColor,
   starSize = 18,
   onPress = () => {},
}) => {
  const styles = StyleSheet.create({
    container: {
      height: responsiveHeight(height),
      width: responsiveWidth(width),
      borderRadius: responsiveWidth(borderRadius),
      backgroundColor: backgroundColor,
      padding: responsiveHeight(2.5)
    },
    firstSection:{
      display: "flex",
      flexDirection: "row", 
      justifyContent: "space-between",
      paddingBottom: responsiveHeight(3)
    },
    secondSection: {
        borderTopColor: "rgba(26, 26, 27, 1)",
        borderTopWidth: 3,
        paddingTop: responsiveHeight(2),
    },
    namesection: {
      marginLeft: responsiveWidth(3)
    }
  });

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<Icon key={i} name="star" color={startColor} size={starSize} />);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.firstSection}>
          <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: responsiveWidth(imgWidth), height: responsiveHeight(imgHight), borderRadius: imgBorderRadius }}
          />
          <View style={styles.namesection}>
            <Text style={{ color: textColor, fontFamily: fontFamily, fontSize: responsiveFontSize(nameFontSize) }}>{name}</Text>
            <View style={{ flexDirection: "row" }}>{renderStars()}</View>
          </View>
          </View>

          <View>
            <PrimaryButton
              width={buttonWidth}
              height={buttonHeight}
              title= {buttonTitle}
              buttonColor={buttonColor}
              borderColor= {buttonBorderColor}
              borderWidth={buttonBorderWidth}
              fontSize={buttonFontSize}
              color={buttonTextColor}
              fontFamily = {fontFamily}
              onPress={onPress}
            />
          </View>
        </View>
      </View>

      <View style={styles.secondSection}>
        <Text style={{ color: textColor, fontFamily: fontFamily, fontSize: responsiveFontSize(locationFontSize) }}>{locationText}</Text>
        <Text style={{ color: textColor, fontFamily: fontFamily, fontSize: responsiveFontSize(locationFontSize) }}>{eventText}</Text>
      </View>
    </View>
  );
};
