import { View, StyleSheet } from "react-native";
  import { Card, Text } from "react-native-paper";
  import React from "react";
  import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
  import { BlurView } from "expo-blur";
  import { EditAndUpcomingEventCardInterface } from "../../interface/cards/EditAndUpcomingEventCardInterface";
  import { Colors } from "../../theme/ColorsConstant";
  import { UPCOMING } from "../../constants/Constants";
  
  export const EditAndUpcomingEventCard: React.FC<
    EditAndUpcomingEventCardInterface
  > = ({
    eventDate = "",
    eventLocation = "",
    category = "",
    company = "",
    eventDescription = "",
    textColor = Colors.textColor,
    height = 40,
    width = 100,
    eventStatus = "",
    companyName = "",
    borderRadius = 10,
    fontSize = 2,
    imageSource = { uri: "https://picsum.photos/700" },
    descriptionFontSize = 2,
    eventName = "",
    eventTextColor = Colors.textColor,
    eventDateFontSize = 2,
    blurSectionborderRadius = 3,
    fontFamily,
    blurIntensity = 20,
  }) => {
    return (
      <Card
        style={{
          width: responsiveWidth(width),
          height: responsiveHeight(height),
          borderRadius: responsiveWidth(borderRadius),
        }}
      >
        <Card.Cover
          source={{ uri: imageSource.uri }}
          style={{
            width: responsiveWidth(width),
            height: responsiveHeight(height),
          }}
        />
  
        <View style={styles.dateSection}>
          <Text
            style={{
              color: textColor,
              marginLeft: responsiveWidth(2),
              fontSize: responsiveFontSize(eventDateFontSize),
              fontFamily: fontFamily,
            }}
          >
            {eventDate}
          </Text>
        </View>
  
        <BlurView
          style={[
            styles.infoSection,
            {
              borderRadius: responsiveWidth(blurSectionborderRadius),
              overflow: "hidden",
              flex: 1,
            },
          ]}
          intensity={blurIntensity}
          tint="dark"
        >
          <Text
            style={{
              color: textColor,
              marginRight: responsiveWidth(2),
              marginLeft: responsiveWidth(2),
              fontSize: responsiveFontSize(fontSize),
              fontFamily: fontFamily,
            }}
          >
            {eventLocation}
          </Text>
          <Text
            style={{
              color: textColor,
              marginRight: responsiveWidth(2),
              fontSize: responsiveFontSize(fontSize),
              fontFamily: fontFamily,
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              color: textColor,
              marginRight: responsiveWidth(2),
              fontSize: responsiveFontSize(fontSize),
              fontFamily: fontFamily,
            }}
          >
            {company}
          </Text>
        </BlurView>
  
        {eventStatus === UPCOMING ? (
          <BlurView
            style={[
              styles.cardContent,
              {
                borderBottomLeftRadius: responsiveWidth(3),
                borderBottomRightRadius: responsiveWidth(3),
                overflow: "hidden",
                flex: 1,
              },
            ]}
            intensity={blurIntensity}
            tint="dark"
          >
            <Text
              style={{
                color: eventTextColor,
                fontSize: responsiveFontSize(3),
                marginBottom: responsiveHeight(1.5),
                fontFamily: fontFamily,
              }}
            >
              {eventName}
            </Text>
            <Text
              style={{
                color: eventTextColor,
                fontSize: responsiveFontSize(descriptionFontSize),
                fontFamily: fontFamily,
              }}
            >
              {eventDescription}
            </Text>
            <View style={styles.Posted}>
              <Text
                style={{
                  color: eventTextColor,
                  marginRight: responsiveWidth(6),
                  fontSize: responsiveFontSize(1.4),
                  fontFamily: fontFamily,
                }}
              >
                Posted By
              </Text>
              <Text
                style={{
                  color: textColor,
                  marginRight: responsiveWidth(6),
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: fontFamily,
                }}
              >
                {companyName}
              </Text>
            </View>
          </BlurView>
        ) : (
          <View style={[styles.cardContent]}>
            <Text
              style={{
                color: textColor,
                fontSize: responsiveFontSize(descriptionFontSize),
                fontFamily: fontFamily,
              }}
            >
              {eventDescription}
            </Text>
          </View>
        )}
      </Card>
    );
};

const styles = StyleSheet.create({
  dateSection: {
    position: 'absolute',
    top: responsiveWidth(5),
  },
  infoSection: {
    position: 'absolute',
    top: responsiveWidth(2),
    right: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    justifyContent: 'space-around',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: responsiveWidth(4),
    height: 'auto',
    minHeight: 'auto',
  },
  Posted: {
    alignItems: 'flex-end',
  }
});

