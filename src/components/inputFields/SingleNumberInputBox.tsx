import React, { useState,useEffect } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { TextInput } from 'react-native-paper';
import { SingleNumberInputBoxInterface } from '../../interface/inputFields/SingleNumberInputBoxInterface';
import { Colors } from "../../theme/ColorsConstant"
export const SingleNumberInputBox: React.FC<SingleNumberInputBoxInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "",
    backgroundColor = Colors.backgroundColor,
    mode = "outlined",
    width = 100,
    activeOutlineColor = Colors.activeOutlineColor,
    outlineColor = Colors.outlineColor,
    textColor = Colors.textColor,
    maxLength = 1,
    borderRadius = 2,
    fontSize = 3,
    height=10,
    marginLeft=0,
    marginRight=0,
    value="",
    onChangeText = () => { },
}) => {
    const [text, setText] = useState<string>();
    useEffect(()=>{
        if(value!==null){
            setText(value)
        }
    },[value])
    return (
        <>
            <TextInput
                theme={{ colors: { onSurfaceVariant: textColor } }}
                mode='outlined'
                style={{
                    backgroundColor: backgroundColor,
                    alignSelf: 'center',
                    width: responsiveWidth(width),
                    fontSize: responsiveFontSize(fontSize),
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlignVertical: 'center',
                    height:responsiveHeight(height),
                    marginLeft:responsiveWidth(marginLeft),
                    marginRight:responsiveWidth(marginRight)
                }}
                activeOutlineColor={activeOutlineColor}
                placeholder={placeHolder}
                outlineColor={outlineColor}
                textColor={textColor}
                onChangeText={(text) => { setText(text); onChangeText(text); }}
                autoCapitalize="none"
                blurOnSubmit={true}
                keyboardType='number-pad'
                returnKeyType="done"
                maxLength={maxLength}
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
            />
        </>
    );
};