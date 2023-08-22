import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { InputTextAreaInterface } from '../../interface/inputFields/InputTextAreaInterface';
import { Colors } from '../../theme/ColorsConstant'

export const InputTextArea: React.FC<InputTextAreaInterface & { onChangeText: (text: string) => void }> = ({
    label = "",
    placeHolder = "",
    backgroundColor = Colors.backgroundColor,
    mode = "outlined",
    width = 100,
    activeOutlineColor = Colors.activeOutlineColor,
    outlineColor = Colors.outlineColor,
    textColor = Colors.textColor,
    borderRadius = 2,
    error = false,
    errorMessage = '',
    fontSize = 2,
    multiline = true,
    numberOfLines = 5,
    errorColor = Colors.errorColor,
    placeholderTextColor = Colors.placeholderTextColor,
    onChangeText = () => { },
}) => {
    const [areaText, setAreaText] = useState<string>("");
    return (
        <>
            <TextInput
                label={label}
                theme={{ colors: { onSurfaceVariant: textColor } }}
                mode='outlined'
                style={{
                    backgroundColor: backgroundColor,
                    alignSelf: 'center',
                    width: responsiveWidth(width),
                    fontSize: responsiveFontSize(fontSize)
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                placeholderTextColor={placeholderTextColor}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => { setAreaText(text); onChangeText(text) }}
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
                <HelperText type="error" style={{ marginLeft: responsiveWidth(3), color: errorColor }}>{errorMessage}</HelperText>
            )}
        </>
    );
};