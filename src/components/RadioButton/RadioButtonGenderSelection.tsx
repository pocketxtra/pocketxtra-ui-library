import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { RadioButtonCompProps } from '../../interface/RadioButton/GenderSelectionInterfaceTwo';

export const RadioButtonComp: React.FC<RadioButtonCompProps> = ({
    options,
    checkedColor = 'black',
    uncheckedColor = 'silver',
    containerStyle = {},
    fontWeight = 'bold',
   fontSize = 2,
    title,
    marginBottom = 1
  }) => {
    const [checked, setChecked] = React.useState<string>('');
  
    return (
      <View style={{ justifyContent: 'center' , alignSelf: 'center',  ...containerStyle   }}>
        {title && (
          <Text style={{ fontSize: responsiveHeight(fontSize), fontWeight  , textAlign : "center" , marginBottom : responsiveHeight(marginBottom) }}>
            {title}
          </Text>
        )}
  
        {options.map((option) => (
          <View style={{ flexDirection: 'row', alignItems: 'center'}} key={option.value}>
            <RadioButton
              value={option.value}
              onPress={() => setChecked(option.value)}
              color={checkedColor}
              uncheckedColor={uncheckedColor}
              status={checked === option.value ? 'checked' : 'unchecked'}
            />
            <Text>{option.label}</Text>
          </View>
        ))}
      </View>
    );
  };
  