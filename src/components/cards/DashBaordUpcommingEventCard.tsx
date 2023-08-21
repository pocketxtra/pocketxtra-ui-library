import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { BlurView } from 'expo-blur';
import { DashBoardInfoCardInterface } from '../../interface/cards/DashBoardInfoCardInterface';

export const DashBaordUpcommingEventCard: React.FC<DashBoardInfoCardInterface> =({
  width = 50,
  height = 40,
  EventName = "",
  color= "",
  EventDate = "",
  CompanyName = "",
  colorDark = '',
  borderRadius = 8,
  imageSource = { uri: '' },
  fontFamily = 'Nunito'
}) => {
  return(
    <Card style={{width: responsiveWidth(width), height: responsiveHeight(height), borderRadius: responsiveWidth(borderRadius)}}>
       <Card.Cover  source={{ uri: imageSource.uri }} style={{width: responsiveWidth(width), height: responsiveHeight(height), borderRadius: responsiveWidth(borderRadius)}} />
       
       <BlurView style={[styles.cardContent, {borderBottomLeftRadius: responsiveWidth(borderRadius), borderBottomRightRadius: responsiveWidth(borderRadius), 
              overflow: "hidden",  
              flex: 1,  }]} intensity={30} tint="dark">
        <Text style={{ color: color, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(2.3), marginBottom: responsiveHeight(1.25) , fontFamily : fontFamily }}>{EventName}</Text>
        <Text style={{ color: colorDark, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.6),  marginBottom: responsiveHeight(0.3), fontFamily : fontFamily }}>{EventDate}</Text>
        <Text style={{ color: colorDark, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.4), marginBottom: responsiveHeight(0.5), fontFamily : fontFamily }}>Posted By</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.8), fontFamily : fontFamily, marginBottom: responsiveWidth(3)}}>{CompanyName}</Text>
       </BlurView>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: responsiveWidth(4),
    height: 'auto',
    minHeight: 'auto',
   
    
  }
})