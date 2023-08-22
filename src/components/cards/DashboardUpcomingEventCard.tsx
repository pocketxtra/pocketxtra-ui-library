import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { BlurView } from "expo-blur";
import { DashboardUpcomingEventCardInterface } from "../../interface/cards/DashboardUpcomingEventCardInterface";
import { Colors} from "../theme/ColorsConstant"

export const DashboardUpcomingEventCard: React.FC<
DashboardUpcomingEventCardInterface
> = ({
  width = 100,
  height = 70,
  eventName = '',
  textColor = Colors.textColor,
  eventDate = '',
  companyName = '',
  borderRadius = 8,
  imageSource = { uri: 'https://picsum.photos/700' },
  eventNameSize = 2,
  eventDateTextColor = Colors.textColor,
  eventDateTextSize = 2,
  companyNameTextSize = 2
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
          borderRadius: responsiveWidth(borderRadius),
        }}
      />

      <BlurView
        style={[
          styles.cardContent,
          {
            borderBottomLeftRadius: responsiveWidth(borderRadius),
            borderBottomRightRadius: responsiveWidth(borderRadius),
            overflow: "hidden",
            flex: 1,
          },
        ]}
        intensity={30}
        tint="dark"
      >
        <Text
          style={{
            color: textColor,
            marginRight: responsiveWidth(12),
            fontSize: responsiveFontSize(eventNameSize),
            marginBottom: responsiveHeight(1.25),
          }}
        >
          {eventName}
        </Text>
        <Text
          style={{
            color: eventDateTextColor,
            marginRight: responsiveWidth(15),
            fontSize: responsiveFontSize(eventDateTextSize),
            marginBottom: responsiveHeight(0.3),
          }}
        >
          {eventDate}
        </Text>
        <Text
          style={{
            color: eventDateTextColor,
            marginRight: responsiveWidth(12),
            fontSize: responsiveFontSize(eventDateTextSize),
            marginBottom: responsiveHeight(0.5),
          }}
        >
          Posted By
        </Text>
        <Text
          style={{
            color: textColor,
            marginRight: responsiveWidth(12),
            fontSize: responsiveFontSize(companyNameTextSize),
            marginBottom: responsiveWidth(3),
          }}
        >
          {companyName}
        </Text>
      </BlurView>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: responsiveWidth(4),
    height: 'auto',
    minHeight: 'auto',
  },
});
