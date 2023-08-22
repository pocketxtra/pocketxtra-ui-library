import React from 'react';
import { Button } from 'react-native-paper'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { PrimaryButtonInterface } from '../../interface/buttons/PrimaryButtonInterface';
import {Colors} from '../../theme/ColorsConstant'

export const PrimaryButton : React.FC<PrimaryButtonInterface & { onPress?: () => void }> = ({
    title = "",
    buttonColor = Colors.backgroundColor,
    height = 8,
    width = 100,
    fontSize = 2,
    color = Colors.textColor,
    borderColor=Colors.borderColor,
    borderWidth=2,
    borderRadius=22,
    disabled=false,
    marginTopLabel=0,
    marginBottomLabel=0,
    marginLeftLabel=0,
    marginRightLabel=0,
    marginTopButton=0,
    marginBottomButton=0,
    marginLeftButton=0,
    marginRightButton=0,
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
                borderColor:borderColor,
                borderWidth:borderWidth,
                backgroundColor:buttonColor,
                marginTop:marginTopButton,
                marginBottom:marginBottomButton,
                marginLeft:marginLeftButton,
                marginRight:marginRightButton,
            }}
            labelStyle={{
                fontSize: responsiveFontSize(fontSize),
                textAlignVertical: 'center',
                color:color,
                marginTop:responsiveWidth(marginTopLabel),
                marginBottom:responsiveWidth(marginBottomLabel),
                marginLeft:responsiveWidth(marginLeftLabel),
                marginRight:responsiveWidth(marginRightLabel),
            }}
            contentStyle={{ alignSelf: 'center' }}
            onPress={onPress}
            disabled={disabled}
        >
            {title}
        </Button>
    );
};