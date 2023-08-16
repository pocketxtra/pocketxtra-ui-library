import React from 'react';
import { Button } from 'react-native-paper'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TertiaryButtonInterface } from '../../interface/buttons/TertiaryButtonInterface';

export const TertiaryButton: React.FC<TertiaryButtonInterface & { onPress?: () => void }> = ({
    title = "Tertiary",
    buttonColor = "#B0E50E",
    height = 5,
    width = 30,
    fontSize = 1.8,
    color = "#101318",
    borderColor = "#9AC80D",
    borderRadius = 22,
    borderWidth = 1,
    icon = false,
    sizeIcon=5,
    onPress = () => {},
    disabled=false,
}) => {
    return (
        <Button mode="contained"
            icon={icon ? ({ size, color }) => (
                <Icon name="verified" size={responsiveWidth(sizeIcon)} color={"#000000"} />
            ) : undefined}
            style={{
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius:responsiveWidth(borderRadius),
                height: responsiveHeight(height),
                width: responsiveWidth(width),
                borderColor:borderColor,
                borderWidth:borderWidth,
                backgroundColor:disabled?"#CAC4C4":buttonColor
            }}
            labelStyle={{
                fontSize: responsiveFontSize(fontSize),
                textAlignVertical: 'center',
                color: disabled?"#fff":color,
                marginTop:0,
                marginBottom:0
            }}
            contentStyle={{ alignSelf: 'center',flexDirection:"row-reverse" }}
            onPress={onPress}
            disabled={disabled}
            >
            {title}
        </Button>
    );
};