import React, { useState } from 'react';
import {
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBarInterface } from '../../interface/searchBar/SearchBarInterface';

export const SearchBar : React.FC<SearchBarInterface & { onChangeText: (text: string) => void }> = ({
    placeHolder = "Search here",
    backgroundColor = "#1F242E",
    mode = "outlined",
    width = 90,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#687797",
    borderRadius = 2,
    error = false,
    errorMessage = '* Error: Payment Source is required',
    fontSize=2,
    iconColor = '#FFC727',
    disabled=false,
    inProgress=false,
    onChangeText = () => {},
}) => {
    const [text, setText] = useState<string>("");
    return (
        <>
            <TextInput
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
                right={<TextInput.Icon icon={(props) => <Icon name={inProgress?"circle-o-notch":"search"} color={iconColor} size={responsiveWidth(8)}/>} />}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
        </>
    );
};