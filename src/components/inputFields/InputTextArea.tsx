import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { InputTextAreaInterface } from '../../interface/inputFields/InputTextAreaInterface';

export const InputTextArea: React.FC<InputTextAreaInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "Description",
    backgroundColor = "#3D3E41",
    mode = "outlined",
    width = 90,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#E4E4E4",
    borderRadius = 2,
    error = false,
    errorMessage = '* Error: Description is required',
    fontSize=2,
    multiline=true,
    numberOfLines=5,
    onChangeText = () => {},
}) => {
    const [areaText, setAreaText] = useState<string>("");
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
                    fontSize:responsiveFontSize(fontSize)
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => {setAreaText(text);onChangeText(text)}}
                autoCapitalize="none"
                blurOnSubmit={false}
                keyboardType="default"
                returnKeyType="done"
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={areaText}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
        </>
    );
};