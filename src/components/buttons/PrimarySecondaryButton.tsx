import React from 'react';
import { Button } from 'react-native-paper'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { PrimarySecondaryButtonInterface } from '../../interface/buttons/PrimarySecondaryButtonInterface';

export const PrimarySecondaryButton: React.FC<PrimarySecondaryButtonInterface & { onPress?: () => void }> = ({
    title = "Primary Button",
    buttonColor = "#B0E50E",
    height = 8,
    width = 70,
    fontSize = 2.5,
    color = "#101318",
    borderColor="#9AC80D",
    borderWidth=3,
    borderRadius=22,
    disabled=false,
    marginTop=0,
    marginBottom=0,
    marginLeft=0,
    marginRight=0,
    onPress = () => {},
}) => {
    return (
        <Button mode="contained" 
            style={{
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius:responsiveWidth(borderRadius),
                height: responsiveHeight(height),
                width: responsiveWidth(width),
                borderColor:disabled?"#D8D8D8":borderColor,
                borderWidth:borderWidth,
                backgroundColor:disabled?"#CAC4C4":buttonColor
            }}
            labelStyle={{
                fontSize: responsiveFontSize(fontSize),
                textAlignVertical: 'center',
                color: disabled?"#fff":color,
                marginTop:responsiveWidth(marginTop),
                marginBottom:responsiveWidth(marginBottom),
                marginLeft:responsiveWidth(marginLeft),
                marginRight:responsiveWidth(marginRight),
            }}
            contentStyle={{ alignSelf: 'center' }}
            onPress={onPress}
            disabled={disabled}
        >
            {title}
        </Button>
    );
};