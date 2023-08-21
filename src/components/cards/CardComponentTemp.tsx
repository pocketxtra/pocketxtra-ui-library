import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BlurView } from 'expo-blur';
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
  EventStatus = "",
  CompanyName = "Jio India",
  borderRadius = 10,
  fontSize = 1.7,
  imageSource = { uri: 'https://picsum.photos/700' },
  DesTextSize = 2,
  EventName = 'Slchd Concert',
  EventColor = "#ccc",
}) => {
  return (
    <Card style={{ width: responsiveWidth(width), height: responsiveHeight(height), borderRadius : responsiveWidth(borderRadius)}}>
      <Card.Cover source={{ uri: imageSource.uri }} style={{ width: responsiveWidth(width), height: responsiveHeight(height)}}/>
      
      <View style={styles.dateSection}>
        <Text style={[styles.dateText, {color: color, fontFamily: fontFamily, marginLeft: responsiveWidth(2),}]}>{EventDate}</Text>
      </View>
      
      <BlurView style={[styles.infoSection, {borderRadius: responsiveWidth(3), overflow: "hidden", flex: 1,}]} intensity={30} tint="dark">
      
        <Text style={{ color: color, marginRight: responsiveWidth(2), marginLeft: responsiveWidth(2),  fontFamily: fontFamily, fontSize: responsiveFontSize(fontSize) }}>{EventLocation}</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily , fontSize: responsiveFontSize(fontSize)}}>{Category}</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(2),  fontFamily: fontFamily, fontSize: responsiveFontSize(fontSize) }}>{Company}</Text>
       
      </BlurView>

        {
          EventStatus === "UpComming" ? (
            <BlurView style={[styles.cardContent, { borderBottomLeftRadius : responsiveWidth(3), 
              borderBottomRightRadius: responsiveWidth(3), 
              overflow: "hidden",  
              flex: 1,  } ]}  intensity={20} tint="dark"> 
              <Text style={{ color: EventColor, fontFamily: fontFamily, fontSize: responsiveFontSize(3), marginBottom : responsiveHeight(1.5), fontWeight: 700 }}>{EventName}</Text>
            <Text style={{ color: 'white', fontFamily: fontFamily, fontSize: responsiveFontSize(DesTextSize) }}>{Eventdes}</Text>
            <View style={styles.Posted}>
            <Text style={{ color: EventColor, marginRight: responsiveWidth(6),  fontFamily: fontFamily, fontSize: responsiveFontSize(1.4), }}>Posted By</Text>
            <Text style={{ color: color, marginRight: responsiveWidth(6),  fontFamily: fontFamily , fontSize: responsiveFontSize(1.8)}}>{CompanyName}</Text>
          </View>
          </BlurView>
          ) :  (
            <View style={[styles.cardContent]}>
               {/* <Text style={{ color: EventColor, fontFamily: fontFamily, fontSize: responsiveFontSize(3), marginBottom : responsiveHeight(1.5) }}>{EventName}</Text> */}
             
             <Text style={{ color: color, fontFamily: fontFamily, fontSize: responsiveFontSize(DesTextSize) }}>{Eventdes}</Text>
            
            </View>
          ) 

        }
        
       

      
       

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
