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

export const ExpandableInput: React.FC<expandableInputInterface> = ({
    Icon = 'pencil'
}) => {
    const [expanded, setExpanded] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');

    const handlePress = () => setExpanded(!expanded); 
  return (
    <List.Section >
      <List.Accordion
        title="Personal Details"
        left={() => null}
        style={{
            borderColor: '#000', 
            borderRadius: 8,   
            borderWidth: 1,
            width: 350,
            height: 50,
            alignSelf : 'center',
            backgroundColor: "#000000",
               
        }}
        titleStyle={{ color: 'white' }}
        right={props => (
            <Pen
                {...props}
                name={expanded ? Icon : Icon }
                size={21}
                color={'#B0E50E'}
                style={{marginTop: -10}}
            />
        )}>
        {expanded && (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              alignSelf : 'center',
              width: 350,
              height: 250,
              backgroundColor: "#000000",
            }}
          />
        )}
      </List.Accordion>

    </List.Section>
  )
}