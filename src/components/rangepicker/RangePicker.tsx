import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {  responsiveWidth } from 'react-native-responsive-dimensions';
import { RangePickerInterface } from '../../interface/rangePicker/RangePicker';

export const RangePickerComponent :React.FC<RangePickerInterface> = ({
  sliderLength,
  min,
  max,
  step,
  backgroundColor,
  buttonBorderRadius,
  color,
  trackStyling,
  SelectedStyling,
  MarkerStyling,
  
   }) => {

  const [values, setValues] = useState([20, 80]);

  const onValuesChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
      <MultiSlider
        values={values}
        sliderLength={sliderLength}
        onValuesChange={onValuesChange}
        min={min}
        max={max}
        step={step}
        trackStyle={trackStyling}
  selectedStyle={SelectedStyling}
  markerStyle={MarkerStyling}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ backgroundColor:  backgroundColor,color:  color, borderRadius: responsiveWidth(buttonBorderRadius?buttonBorderRadius:15),padding: responsiveWidth(3)}}>{`Min Value: ${values[0]}`}</Text>
        <View style={{ width: responsiveWidth(20) }} /> 
        <Text style={{backgroundColor: backgroundColor,color: color,borderRadius: responsiveWidth(buttonBorderRadius?buttonBorderRadius:15),padding: responsiveWidth(3)}}>{`Max Value: ${values[1]}`}</Text>
      </View>
    </View>
  );
};
