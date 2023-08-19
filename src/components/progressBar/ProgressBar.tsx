import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ProgressBarProps } from '../../interface/ProgressbarInterface/ProgressBar';


export const ProgressBarComponent:React.FC<ProgressBarProps> = ({
    ProgressBarWidth = 80,
    textmarginBottom  = 2,
    progressBarHeight = 1.2,
    circlecolor  =  "green",
    circleWidht = 3.5,
    circleHeight= 3.5,
    circleborderRadius  = 1.75,
    circlePositiontop = 1.1
   
  
   }) =>{
    const theme = useTheme();
    const [progress, setProgress] = useState<number>(0);
    const [circleColor, setCircleColor] = useState<string>('lightgray'); 
  
    const handlePress = (e: any) => {
      const x = e.nativeEvent.locationX;
      const progressBarWidth = responsiveWidth(ProgressBarWidth); 
      const newProgress = Math.min(
        1,
        Math.max(0, x / progressBarWidth)
      );
      setProgress(newProgress);
      setCircleColor(circlecolor)
    };
  
    const moveProgress = (increment: number) => {
      const newProgress = Math.min(
        1,
        Math.max(0, progress + increment)
      );
      setProgress(newProgress);
    };
  
    const progressBarWidth = responsiveWidth(ProgressBarWidth); 
    const circleButtonSize = 30; 
    const circleButtonPosition = (progressBarWidth - circleButtonSize) * progress;
  
    return (
      <View style={{ flex: 1,
        alignItems: 'center',
        justifyContent: 'center',}}>
        <View style={{marginBottom: responsiveHeight(textmarginBottom)}}>
          <Text style={{fontWeight: 'bold'}}>{Math.round(progress * 100)}</Text>
        </View>
        <View style={[, { width: progressBarWidth }]}>
          <ProgressBar
            progress={progress}
            color={theme.colors.primary}
            style={{ height: responsiveHeight( progressBarHeight) }} 
          />
          <TouchableOpacity
            style={[{ position: 'absolute',
            top: -responsiveHeight(circlePositiontop), 
            width: responsiveHeight(circleWidht), 
            height: responsiveHeight(circleHeight), 
            borderRadius: responsiveHeight(circleborderRadius), 
            backgroundColor: circleColor,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1}, { left: circleButtonPosition }]}
            onPress={() => moveProgress(-0.05)}
          >
           
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ position: 'absolute',
            top: -responsiveHeight(circlePositiontop), 
            width: responsiveHeight(circleWidht), 
            height: responsiveHeight(circleHeight), 
            borderRadius: responsiveHeight(circleborderRadius), 
            backgroundColor: circleColor,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,}, { left: circleButtonPosition}]}
            onPress={() => moveProgress(0.05)}
          >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,}}
            onPress={(e) => handlePress(e)}
          />
        </View>
      </View>
    );
  };