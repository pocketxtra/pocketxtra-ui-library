import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { RadioButtonCompProps } from '../../interface/RadioButton/MoneySelectionTwo';
export const RadioButtonMoneySelection: React.FC<RadioButtonCompProps> = ({
    options,
    checkedColor = 'black',
    uncheckedColor = 'silver',
    containerStyle = {},
    fontWeight = 'bold',
    fontSize = 1.7,
    title,
  }) => {
    const [checked, setChecked] = React.useState<string>('');
  
    return (
      <View style={{ justifyContent: 'center', alignSelf: 'center', ...containerStyle  , width : 300 , padding : 10 }}>
        {title && (
          <Text style={{ fontSize: responsiveHeight(fontSize), fontWeight  , textAlign : "center"}}>
            {title}
          </Text>
        )}
  
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'  , width : "100%"   }}>
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
      </View>
    );
  };