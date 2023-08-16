import React, { useState } from 'react';
import {
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { InputFieldCustomIconInterface } from '../../interface/inputFields/InputFieldCustomIconInterface';

export const InputFieldCustomIcon : React.FC<InputFieldCustomIconInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "Payment Source",
    backgroundColor = "#3D3E41",
    mode = "outlined",
    width = 90,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#E4E4E4",
    borderRadius = 2,
    error = false,
    errorMessage = '* Error: Payment Source is required',
    fontSize=2,
    iconColor = '#FFC727',
    disabled=false,
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
                    fontSize:responsiveFontSize(fontSize)
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => {setText(text);onChangeText(text)}}
                autoCapitalize="none"
                blurOnSubmit={false}
                keyboardType="default"
                returnKeyType="done"
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
                disabled={disabled}
                right={<TextInput.Icon icon={(props) => <Icon name="dollar-sign" color={iconColor} size={responsiveWidth(8)}/>} />}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
        </>
    );
};