import React, { useState,useEffect } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import { TextInputOutlinedInterface } from '../../interface/inputFields/TextInputOutlinedInterface';
import { KeyboardTypeOptions, View } from 'react-native';
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
    marginTop=0,
    marginBottom=0,
    marginLeft=0,
    marginRight=0,
    height=20,
    value="",
    errorFontSize=2,
    onChangeText = () => { },
}) => {
    const [text, setText] = useState<string>("");
    useEffect(()=>{
        if(value!==null){
            setText(value)
        }
    },[value])
    return (
        <>
            <View>
            <TextInput
                label={label}
                theme={{ colors: { onSurfaceVariant: textColor } }}
                mode='outlined'
                style={{
                    backgroundColor: backgroundColor,
                    alignSelf: 'center',
                    width: responsiveWidth(width),
                    fontSize: responsiveFontSize(fontSize),
                    textAlign: textAlign,
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
                onChangeText={(text) => { setText(text); onChangeText(text); }}
                autoCapitalize="none"
                blurOnSubmit={true}
                keyboardType={keyboardType as KeyboardTypeOptions}
                returnKeyType="done"
                maxLength={maxLength}
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
                disabled={disabled}
            />
            </View>
            <View>
            {error && errorMessage && (
                <HelperText type="error" style={{ color: errorColor, fontSize:responsiveFontSize(errorFontSize)}}>{errorMessage}</HelperText>
            )}
            </View>
        </>
    );
};