import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputOutlinedInterface } from '../../interface/inputFields/TextInputOutlinedInterface';
import { KeyboardTypeOptions } from 'react-native';
import { Colors } from "../../theme/ColorsConstant"

export const TextInputOutlined: React.FC<TextInputOutlinedInterface & { onChangeText: (text: string) => void }> = ({
    label = "",
    placeHolder = "",
    backgroundColor = Colors.backgroundColor,
    mode = "outlined",
    width = 100,
    activeOutlineColor = Colors.activeOutlineColor,
    outlineColor = Colors.outlineColor,
    textColor = Colors.textColor,
    maxLength = 255,
    keyboardType = "default",
    borderRadius = 2,
    error = false,
    errorMessage = '',
    fontSize = 2,
    errorColor = Colors.errorColor,
    disabled = false,
    textAlign = "auto",
    placeholderTextColor = Colors.placeholderTextColor,
    onChangeText = () => { },
}) => {
    const [text, setText] = useState<string>("");
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
                    fontSize: responsiveFontSize(fontSize),
                    textAlign: textAlign
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                placeholderTextColor={placeholderTextColor}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => { setText(text); onChangeText(text); }}
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
                <HelperText type="error" style={{ marginLeft: responsiveWidth(3), color: errorColor }}>{errorMessage}</HelperText>
            )}
        </>
    );
};