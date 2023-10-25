import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { AppliedCardInterface } from "../../interface/cards/AppliedCardInterface";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Icon from "react-native-vector-icons/AntDesign";
import Location from "react-native-vector-icons/MaterialIcons";
import { PrimaryButton, TertiaryButton} from "../../components/buttons/index";
import { Icons } from "../iconFolder";
import { Colors } from "../../theme/ColorsConstant";

export const AppliedCard: React.FC<AppliedCardInterface> = ({
  startColor = Colors.iconColor,
  locationName = "Location Name",
  backgroundColor = Colors.backgroundColor,
  height = 40,
  width = 100,
  borderRadius = 10,
  borderWidth = 3,
  borderColor = Colors.borderColor,
  numberOfStars = 5,
  noOfEvents = 0,
  imageUri = "https://picsum.photos/700",
  crewName = "Crew Name",
  eventName = "No. of Events",
  user = "Organiser",
  iconName = "closecircle",
  iconColor = Colors.outlineColor,
  ageNo = 18,
  ageText = "Age",
  locationIconColor = Colors.iconColor,
  buttonOneColor = Colors.outlineColor,
  buttonOneText = "Button One",
  buttonOneTextColor = Colors.textColor,
  buttonOneFontSize = 1.4,
  buttonTwoIconName = "verified",
  buttonTwoIconColor = Colors.iconColor,
  buttonTwoIconSize = 4,
  buttonTwoText = "Button Two",
  buttonOneWidth = 30,
  buttonOneBorderColor = Colors.outlineColor,
  buttonTwoBorderColor = Colors.outlineColor,
  buttonOneHeight = 6,
  buttonTwoTextColor = Colors.textColor,
  buttonTwoWidth = 30,
  buttonTwoHeight = 6,
  buttonTwoFontSize = 1.4,
  buttonTwoColor = Colors.outlineColor,
  textColor = Colors.textColor,
  fontFamily,
  crewNameFontSize = 1.6,
  iconSize = 20,
  starSize = 18,
  middleHrRowColor= Colors.borderColor,
  middleHrRowWidth=0.5,
  organiserApprovalButtonBorderColor= Colors.borderColor,
  waitingIconColor = Colors.iconColor,
  buttonTwoOnPress = Colors.iconColor,
  buttonOneOnPress =  Colors.iconColor,
  buttonOneIsVisible = true,
  waitingIsVisible = true,
  buttonTwoIsVisible = true
}) => {
    const styles = StyleSheet.create({
        container: {
            height: responsiveHeight(height),
            width: responsiveWidth(width),
            borderRadius: responsiveWidth(borderRadius),
            backgroundColor: backgroundColor,
            padding: responsiveHeight(2.5),
            borderWidth: borderWidth,
            borderColor: borderColor,
        },
        firstSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: responsiveHeight(3),
        },
        secondSection: {
            borderTopColor: middleHrRowColor,
            borderTopWidth: responsiveWidth(middleHrRowWidth),
            paddingTop: responsiveHeight(2),
        },
        namesection: {
            marginLeft: responsiveWidth(3),
        },
        organiserApproval: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 2,
            borderColor: organiserApprovalButtonBorderColor,
            height: responsiveHeight(5),
            width: responsiveWidth(30),
            justifyContent: "center",
            borderRadius: 30,
        },
        waitingStyle: {
            width: responsiveWidth(13),
            height: responsiveHeight(6),
            backgroundColor: Colors.backgroundColor ,
            borderRadius: 30,
            borderWidth: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: Colors.backgroundColor, 
        }
    });

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            stars.push(
                <Icons key={i} name="star" color={startColor} size={starSize}/>
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.firstSection}>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Image
                            source={{uri: imageUri}}
                            style={{width: 50, height: 50, borderRadius: 25}}
                        />
                        <View style={styles.namesection}>
                            <Text
                                style={{
                                    color: textColor,
                                    fontSize: responsiveFontSize(crewNameFontSize),
                                    fontFamily: fontFamily,
                                }}
                            >
                                {crewName}
                            </Text>
                            <View style={{flexDirection: "row"}}>{renderStars()}</View>
                        </View>
                    </View>

                    <View style={styles.organiserApproval}>
                        <Icons name={iconName} color={iconColor} size={iconSize}/>
                        <Text
                            style={{
                                color: textColor,
                                marginLeft: responsiveWidth(2),
                                fontFamily: fontFamily,
                            }}
                        >
                            {user}
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Text style={{color: textColor, fontFamily: fontFamily}}>
                            {ageText}
                        </Text>
                        <Text
                            style={{
                                color: textColor,
                                marginLeft: responsiveWidth(7),
                                fontFamily: fontFamily,
                            }}
                        >
                            {eventName}
                        </Text>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: responsiveWidth(4),
                        }}
                    >
                        <Text style={{color: textColor, fontFamily: fontFamily}}>
                            {ageNo}
                        </Text>
                        <Text
                            style={{
                                color: textColor,
                                marginLeft: responsiveWidth(9),
                                fontFamily: fontFamily,
                            }}
                        >
                            {noOfEvents}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.secondSection}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Location name="location-pin" size={30} color={locationIconColor}/>
                    <Text style={{color: textColor, fontFamily: fontFamily}}>
                        {locationName}
                    </Text>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: responsiveHeight(1),
                    }}
                >

                    {
                        buttonOneIsVisible === true ?
                            <PrimaryButton
                                title={buttonOneText}
                                borderColor={buttonOneBorderColor}
                                width={buttonOneWidth}
                                height={buttonOneHeight}
                                fontSize={buttonOneFontSize}
                                color={buttonOneTextColor}
                                buttonColor={buttonOneColor}
                                fontFamily={fontFamily}
                                onPress={buttonOneOnPress}
                            /> : null
                    }


                    {waitingIsVisible === true ?
                        <View style={styles.waitingStyle}>
                            <Pressable>
                                <Icons name={"timer"} color={waitingIconColor} size={35}/>
                            </Pressable>
                        </View> : null
                    }

                    {
                        buttonTwoIsVisible === true ?
                            <TertiaryButton
                                title={buttonTwoText}
                                borderColor={buttonTwoBorderColor}
                                width={buttonTwoWidth}
                                height={buttonTwoHeight}
                                fontSize={buttonTwoFontSize}
                                color={buttonTwoTextColor}
                                buttonColor={buttonTwoColor}
                                iconSize={buttonTwoIconSize}
                                iconColor={buttonTwoIconColor}
                                fontFamily={fontFamily}
                                icon={true}
                                materialIconName={buttonTwoIconName}
                                onPress={buttonTwoOnPress}
                            /> :
                            null
                    }


                </View>
            </View>
        </View>
    );
};