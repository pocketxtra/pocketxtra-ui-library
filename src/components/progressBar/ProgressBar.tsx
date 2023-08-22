import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { ProgressBarComponentProps } from '../../interface/ProgressbarInterface/ProgressBar';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import Slider from '@react-native-community/slider';


export const ProgressBarComponentComponent:React.FC<ProgressBarComponentProps> = ({

  minimumValue ,
  maximumValue,
  step,
  textColor,
  textFontSize,
  textMarginBottom,
  sliderStyle,
  minimumTrackTintColor,
  maximumTrackTintColor

})  => {
  const [value, setValue] = useState<number>(50);

  const onValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{  color: textColor,fontSize: responsiveHeight(textFontSize?textFontSize : 3), marginBottom: responsiveHeight(textMarginBottom?textMarginBottom:2),}}>{value}</Text>
      <Slider
        style={{ width: responsiveWidth(70) ,...sliderStyle }}
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


