import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { SingleNumberInputBoxInterface } from '../../interface/inputFields/SingleNumberInputBoxInterface';

export const SingleNumberInputBox : React.FC<SingleNumberInputBoxInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "",
    backgroundColor = "#ffffff33",
    mode = "outlined",
    width = 20,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#E4E4E4",
    maxLength = 1,
    borderRadius = 2,
    error = false,
    errorMessage = '* Default Error Message',
    fontSize=3,
    onChangeText = () => {},
}) => {
    const [text, setText] = useState<string>();
    return (
        <>
            <TextInput
                theme={{ colors: { onSurfaceVariant: '#E4E4E4' } }}
                mode='outlined'
                style={{
                    backgroundColor: backgroundColor,
                    alignSelf: 'center',
                    width: responsiveWidth(width),
                    fontSize:responsiveFontSize(fontSize),
                    justifyContent:'center',
                    alignItems:'center',
                    textAlignVertical:'center',
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => {setText(text);onChangeText(text);}}
                autoCapitalize="none"
                blurOnSubmit={false}
                keyboardType='number-pad' 
                returnKeyType="done"
                maxLength={maxLength}
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
        </>
    );
};