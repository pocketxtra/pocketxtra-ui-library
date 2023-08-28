import React, { useState } from 'react';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { InputFieldIconInterface } from '../../interface/inputFields/InputFieldWithIconInterface';
import { Colors } from '../../theme/ColorsConstant';

export const InputFieldWithIcon: React.FC<InputFieldIconInterface & { onChangeText: (text: string) => void }> = ({
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
    iconColor = Colors.iconColor,
    disabled = false,
    iconSize = 8,
    errorColor = Colors.errorColor,
    placeholderTextColor = Colors.placeholderTextColor,
    marginTop=0,
    marginBottom=0,
    marginLeft=0,
    marginRight=0,
    height=20,
    featherIconName="dollar-sign",
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
                    height:responsiveWidth(height),
                    marginTop: responsiveHeight(marginTop),
                    marginBottom: responsiveHeight(marginBottom),
                    marginLeft: responsiveWidth(marginLeft),
                    marginRight: responsiveWidth(marginRight),
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                placeholderTextColor={placeholderTextColor}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => { setText(text); onChangeText(text) }}
                autoCapitalize="none"
                blurOnSubmit={true}
                keyboardType="default"
                returnKeyType="done"
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
                disabled={disabled}
                right={<TextInput.Icon icon={(props) => <Icon name={featherIconName} color={iconColor} size={responsiveWidth(iconSize)} />} />}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{ marginLeft: responsiveWidth(3), color: errorColor }}>{errorMessage}</HelperText>
            )}
        </>
    );
};