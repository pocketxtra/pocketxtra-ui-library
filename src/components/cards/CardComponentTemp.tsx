import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { OrgEventInfoCardInterface } from '../../interface/cards/TempInterface';

export const OrgEventInfoCard: React.FC<OrgEventInfoCardInterface> = ({
  EventDate = "24 Jun 2023 - 28 Jun 2023",
  EventLocation = "Delhi",
  Category= "Concert",
  Company = "Jio Delhi",
  Eventdes= '',
  fontFamily = 'Poppins',
  color = '#fff',
  height =40,
  width = 100,
  EventStatus = "UpComming",
  CompanyName = "Jio India",
  borderRadius = 10,
  fontSize = 1.7,
  imageSource = { uri: 'https://picsum.photos/700' }
}) => {
  return (
    <Card style={{ width: responsiveWidth(width), height: responsiveHeight(height), borderRadius : responsiveWidth(borderRadius)}}>
      <Card.Cover source={{ uri: imageSource.uri }} style={{ width: responsiveWidth(width), height: responsiveHeight(height)}}/>
      
      <View style={styles.dateSection}>
        <Text style={[styles.dateText, {color: color, fontFamily: fontFamily, marginLeft: responsiveWidth(2),}]}>{EventDate}</Text>
      </View>
      
      <View style={styles.infoSection}>
        <Text style={{ color: color, marginRight: responsiveWidth(2), marginLeft: responsiveWidth(2),  fontFamily: fontFamily, fontSize: responsiveFontSize(fontSize) }}>{EventLocation}</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily , fontSize: responsiveFontSize(fontSize)}}>{Category}</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily, fontSize: responsiveFontSize(fontSize) }}>{Company}</Text>
      </View>
      
      <View style={[styles.cardContent,EventStatus === "UpComming"
    ? {
        borderBottomLeftRadius: responsiveWidth(2),
        borderBottomRightRadius: responsiveWidth(2),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
    : {
        borderBottomLeftRadius: responsiveWidth(2),
        borderBottomRightRadius: responsiveWidth(2)
      }]}>
        <Text variant="bodySmall" style={{ color: 'white', fontFamily: fontFamily }}>{Eventdes}</Text>
        {
          EventStatus === "UpComming" ? (
            <View style={styles.Posted}>
            <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily, fontSize: responsiveFontSize(1.6), }}>Posted By</Text>
            <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily , fontSize: responsiveFontSize(1.8)}}>{CompanyName}</Text>
          </View>
        
          ): null
        }
        </View>

    </Card>
  );
};

const styles = StyleSheet.create({
  dateSection: {
    position: 'absolute',
    top: 15,

  },
  dateText: {
    fontSize: responsiveFontSize(1.7),
   
  },
  infoSection: {
    position: 'absolute',
    top: responsiveWidth(2),
    right: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.50)',
    borderRadius: responsiveWidth(10),
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
  Posted:{
    alignItems: 'flex-end',
    
  }
});
