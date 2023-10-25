import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgComponent from './SvgComponent'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Icons } from '../iconFolder/Icons';
import { Colors } from '../../theme/ColorsConstant';

export const LiveEventCard: React.FC<LiveEventCardInterface> = ({
  startTime = '7:00PM',
  paidBy = "PX",
  liveText = "LiveText",
  eventName = "Event Name",
  stripColor = "#fff",
  svgWidth = 90,
  svgHeight = 27,
  fontFamily

}) => {
const styles = StyleSheet.create({

    liveEvent : {
        position: "absolute",
        top : responsiveHeight(3),
        right: responsiveWidth(10),
        display: "flex",
        flexDirection: "row"
    },
    EventDetails : {
        position: "absolute",
        top : responsiveHeight(10),
        left: responsiveWidth(33)
    },
    time:{
        position: "absolute",
        top : responsiveHeight(21),
        left: responsiveWidth(33)
    }
})
 
  return (
    <View  >
      <SvgComponent style={styles.container} fillColor = {stripColor} svgHeight = { svgHeight } svgWidth = { svgWidth }/>
      <View style={styles.liveEvent}>
        <Icons name='dot-circle' color={Colors.iconColor} size={20} />
      <Text style={{color: Colors.iconColor,
        fontFamily: fontFamily , marginLeft: responsiveWidth(2)}}>{liveText}</Text>
      </View>
      
      <View style={styles.EventDetails}>
      <Text style={{color: Colors.iconColor, fontFamily: fontFamily}}>
       {eventName}
      </Text>
      <Text style={{color: Colors.iconColor, fontFamily: fontFamily}}>Paid By {paidBy}</Text>

      </View>
      <View style={styles.time}>
        <Text style={{color: Colors.iconColor, fontFamily: fontFamily}}>Starts at {startTime}</Text>
      </View>
    </View>
  )
}