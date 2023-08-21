import { View, Text, TextInput } from 'react-native'
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pen from 'react-native-vector-icons/Ionicons';
import { List } from 'react-native-paper';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { expandableInputInterface } from '../../interface/expandable/expandableInputInterface';

export const ExpandableWithInputs: React.FC<expandableInputInterface> = ({
  Icon = '',
  width = 100,
  title= "",
  height = 20,
  bgColor = "",
  borderRadius = 3,
  borderWidth = 1,
  borderColor = "",
  IconColor = '',
  textColor = "",
  textSize = 2,
  IconSize = 7,
  fontFamily = "Nunito"
}) => {
  const [expanded, setExpanded] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');

  const handlePress = () => setExpanded(!expanded); 
return (
  <View style={{  width: responsiveWidth(width), height: responsiveWidth(height)}}>
     <List.Section >
     <List.Accordion
      title= {title}
      titleStyle={{color : textColor, fontSize : responsiveFontSize(textSize), alignItems: 'center', justifyContent: 'center', fontFamily: fontFamily}}
      left={() => null}
      style={{
          borderColor: borderColor, 
          borderRadius: responsiveWidth(borderRadius),   
          borderWidth: responsiveWidth(borderWidth),
          width: responsiveWidth(width),
          height: responsiveWidth(height),
          alignSelf : 'center',
          backgroundColor: bgColor,               
      }}
      right={props => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Pen
          {...props}
          name={expanded ? Icon : Icon}
          size= {responsiveWidth(IconSize)}
          color={IconColor}
          
        />
      </View>
      )}>
      {expanded && (
        <View
          style={{
            borderWidth: responsiveWidth(borderWidth),
            borderColor: borderColor,
            borderRadius: responsiveWidth(borderRadius),
            alignSelf : 'center',
            width: responsiveWidth(width),
            height: 'auto',
            paddingBottom: responsiveWidth(10),
            backgroundColor: bgColor,
          }}
        />
      )}
    </List.Accordion>

  </List.Section>
  </View>
 
)
}