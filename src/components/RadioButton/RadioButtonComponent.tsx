import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { responsiveHeight , responsiveWidth } from 'react-native-responsive-dimensions';
import { RadioButtonComponentProps } from '../../interface/RadioButton/RadioButtonInterface';

export const CustomRadioButtonComponent: React.FC<RadioButtonComponentProps> = ({
  options,
  checkedColor,
  uncheckedColor,
  containerStyle = {},
  fontWeight,
  textfontSize,
  title,
  textPadding,
  direction  
}) => {
  const [checked, setChecked] = React.useState<string>('');

  const optionContainerStyle =
    direction === 'row'
      ? { flexDirection: 'row' , justifyContent: 'space-between'  }
      : { flexDirection: 'column' };

  return (
    <View style={{  alignSelf: 'center', ...containerStyle}}>
    {title && (
      <Text
        style={{
          fontSize: responsiveHeight(textfontSize?textfontSize:2),
          fontWeight,
          textAlign: 'center',
          padding : responsiveWidth(textPadding?textPadding:1),
          alignSelf: 'flex-start'
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
            marginVertical: 5,
          }}
        >

          <RadioButton
            value={option.value}
            onPress={() => setChecked(option.value)}
            color={checkedColor?checkedColor:"blue"}
            uncheckedColor={uncheckedColor?uncheckedColor:"gray"}
            status={checked === option.value ? 'checked' : 'unchecked'}
          />
          <Text >{option.label}</Text>
        </View>
      ))}
    </View>
  </View>
  );
};
