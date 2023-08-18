import { View, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { DashBoardInfoCardInterface } from '../../interface/cards/DashBoardInfoCardInterface';

export const DashBaordInfoCard: React.FC<DashBoardInfoCardInterface> =({
  width = 50,
  height = 40,
  EventName = "Event One",
  color= "#fff",
  EventDate = "24 Oct 2023",
  CompanyName = "Jio India",
  colorDark = '#ADADAD',
  borderRadius = 8
}) => {
  return(
    <Card style={{width: responsiveWidth(width), height: responsiveHeight(height), borderRadius: responsiveWidth(borderRadius)}}>
       <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width: responsiveWidth(width), height: responsiveHeight(height), borderRadius: responsiveWidth(borderRadius)}} />
       
       <View style={[styles.cardContent, {borderBottomLeftRadius: responsiveWidth(borderRadius), borderBottomRightRadius: responsiveWidth(borderRadius)}]}>
        <Text style={{ color: color, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(2.3), marginBottom: responsiveHeight(1.25) }}>{EventName}</Text>
        <Text style={{ color: colorDark, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.6),  marginBottom: responsiveHeight(0.3) }}>{EventDate}</Text>
        <Text style={{ color: colorDark, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.4), marginBottom: responsiveHeight(0.5) }}>Posted By</Text>
        <Text style={{ color: color, marginRight: responsiveWidth(12), fontSize: responsiveFontSize(1.8), }}>{CompanyName}</Text>
       </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 'auto',
    minHeight: 'auto',
    
  }
})