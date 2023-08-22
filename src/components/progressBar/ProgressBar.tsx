import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ProgressBarComponentInterface } from '../../interface/ProgressbarInterface/ProgressBar';
import {responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Slider from '@react-native-community/slider';
import {Colors} from "../../theme/ColorsConstant"


export const ProgressBarComponent:React.FC<ProgressBarComponentInterface> = ({

  minimumValue ,
  maximumValue,
  step,
  textColor = Colors.textColor,
  textFontSize = 2,
  textMarginBottom = 2,
  sliderStyle,
  minimumTrackTintColor,
  maximumTrackTintColor

})  => {
  const [value, setValue] = useState<number>(50);

  const onValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: textColor,fontSize: responsiveHeight(textFontSize), marginBottom: responsiveHeight(textMarginBottom),}}>{value}</Text>
      <Slider
        style={{width: responsiveWidth(100) ,...sliderStyle}}
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor=  {minimumTrackTintColor}
        maximumTrackTintColor= { maximumTrackTintColor}
        step={step}
        onValueChange={onValueChange}
      />
    </View>
  );
};


