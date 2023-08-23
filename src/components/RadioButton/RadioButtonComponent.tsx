import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { responsiveHeight , responsiveWidth } from 'react-native-responsive-dimensions';
import { RadioButtonComponentInterface } from '../../interface/RadioButton/RadioButtonInterface';
import { Colors } from '../../theme/ColorsConstant';
export const CustomRadioButtonComponent: React.FC<RadioButtonComponentInterface> = ({
  options,
  checkedColor,
  uncheckedColor,
  marginVertical = 2,
  containerStyle = {},
  textFontSize= 2,
  title,
  fontWeight,
  flexDirections,
  textPadding = 1,
  headingTextColor = Colors.backgroundColor, 
  textColor  = Colors.backgroundColor,
}) => {
  const [checked, setChecked] = React.useState<string>('');

  const optionContainerStyle =
  flexDirections === 'row'
      ? { flexDirection: 'row' , justifyContent: 'space-between'  }
      : { flexDirection: 'column' };

  return (
    <View style={{  alignSelf: 'center', ...containerStyle}}>
    {title && (
      <Text
        style={{
          fontSize: responsiveHeight(textFontSize),
          fontWeight,
          textAlign: 'center',
          padding : responsiveWidth(textPadding),
          alignSelf: 'flex-start',
          color:headingTextColor
        }}
      >
        {title}
      </Text>
    )}
  
    <View style={{ ...optionContainerStyle }}>
      {options?.map((option) => (
        <View
          key={option.value}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: responsiveWidth(marginVertical),
          }}
        >

          <RadioButton
            value={option.value}
            onPress={() => setChecked(option.value)}
            color={checkedColor}
            uncheckedColor={uncheckedColor}
            status={checked === option.value ? 'checked' : 'unchecked'}
          />
          <Text style={{color:textColor}}>{option.label}</Text>
        </View>
      ))}
    </View>
  </View>
  );
};
