import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BlurView } from 'expo-blur';
import { EditAndUpCommingEventCardInterface } from '../../interface/cards/EditAndUpCommingEventCardInterface';
import { Colors} from '../theme/theme'

export const EditAndUpCommingEventCard: React.FC<EditAndUpCommingEventCardInterface> = ({
  eventDate = '',
  eventLocation = '',
  category = '',
  company = '',
  eventDescription = '',
  textColor = Colors.textColor,
  height = 40,
  width = 100,
  eventStatus = '',
  companyName = '',
  borderRadius = 10,
  fontSize = 2,
  imageSource = { uri: 'https://picsum.photos/700' },
  descriptionTextSize = 2,
  eventName = '',
  eventTextColor = Colors.textColor,
  eventDateFontSize = 2
}) => {
  return (
    <Card
      style={{
        width: responsiveWidth(width),
        height: responsiveHeight(height),
        borderRadius: responsiveWidth(borderRadius)
      }}>
      <Card.Cover
        source={{ uri: imageSource.uri }}
        style={{
          width: responsiveWidth(width),
          height: responsiveHeight(height)
        }} 
        />

      <View style={styles.dateSection}>
        <Text
          style={{
             color: textColor, 
             marginLeft: responsiveWidth(2),
             fontSize: responsiveFontSize(eventDateFontSize)
             }}>
          {eventDate}
        </Text>
      </View>

      <BlurView
        style={[styles.infoSection,
        {
          borderRadius: responsiveWidth(3),
          overflow: "hidden",
          flex: 1,
        }]}
        intensity={30}
        tint="dark">
        <Text
          style={{
            color: textColor,
            marginRight: responsiveWidth(2),
            marginLeft: responsiveWidth(2),
            fontSize: responsiveFontSize(fontSize)
          }}>
          {eventLocation}
        </Text>
        <Text
          style={{
            color: textColor,
            marginRight: responsiveWidth(2),
            fontSize: responsiveFontSize(fontSize)
          }}>
          {category}
        </Text>
        <Text style={{
          color: textColor,
          marginRight: responsiveWidth(2),
          fontSize: responsiveFontSize(fontSize)
        }}>
          {company}
        </Text>
      </BlurView>

      {
        eventStatus === "UpComming" ? (
          <BlurView style={[styles.cardContent,
          {
            borderBottomLeftRadius: responsiveWidth(3),
            borderBottomRightRadius: responsiveWidth(3),
            overflow: "hidden",
            flex: 1,
          }]}
            intensity={20}
            tint="dark">
            <Text style={{
              color: eventTextColor,
              fontSize: responsiveFontSize(3),
              marginBottom: responsiveHeight(1.5),
            }}>
              {eventName}</Text>
            <Text style={{
              color: eventTextColor,
              fontSize: responsiveFontSize(descriptionTextSize)
            }}>{eventDescription}
            </Text>
            <View style={styles.Posted}>
              <Text style={{
                color: eventTextColor,
                marginRight: responsiveWidth(6),
                fontSize: responsiveFontSize(1.4)
              }}>
                Posted By
              </Text>
              <Text
                style={{
                  color: textColor,
                  marginRight: responsiveWidth(6),
                  fontSize: responsiveFontSize(1.8)
                }}>
                {companyName}
              </Text>
            </View>
          </BlurView>
        ) : (
          <View
            style={[
              styles.cardContent
            ]}>
            <Text
              style={{
                color: textColor,
                fontSize: responsiveFontSize(descriptionTextSize)
              }}>{eventDescription}
            </Text>
          </View>
        )
      }
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

