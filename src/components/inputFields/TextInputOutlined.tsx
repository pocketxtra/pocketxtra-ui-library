import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputOutlinedInterface } from '../../interface/inputFields/TextInputOutlinedInterface';
import { KeyboardTypeOptions } from 'react-native';

export const TextInputOutlined: React.FC<TextInputOutlinedInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "Input Text Box",
    backgroundColor = "#3D3E41",
    mode = "outlined",
    width = 90,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#E4E4E4",
    maxLength = 255,
    keyboardType = "default",
    borderRadius = 2,
    error = false,
    errorMessage = '* Default Error Message',
    fontSize=2,
    disabled=false,
    textAlign="auto",
    onChangeText = () => {},
}) => {
    const [text, setText] = useState<string>("");
    return (
        <>
            <TextInput
                label={placeHolder}
                theme={{ colors: { onSurfaceVariant: '#E4E4E4' } }}
                mode='outlined'
                style={{
                    backgroundColor: backgroundColor,
                    alignSelf: 'center',
                    width: responsiveWidth(width),
                    fontSize:responsiveFontSize(fontSize),
                    textAlign:textAlign
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => {setText(text);onChangeText(text);}}
                autoCapitalize="none"
                blurOnSubmit={false}
                keyboardType={keyboardType as KeyboardTypeOptions} 
                returnKeyType="done"
                maxLength={maxLength}
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
                disabled={disabled}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
        </>
    );
};