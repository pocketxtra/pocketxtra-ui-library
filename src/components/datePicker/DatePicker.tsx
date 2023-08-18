import React, { useEffect, useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerInterface } from '../../interface/datePicker/DatePickerInterface';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export const DatePicker: React.FC<DatePickerInterface & { onChangeDate: (text: string) => void }> = ({
    placeHolder = "Date Picker",
    backgroundColor = "#3D3E41",
    mode = "outlined",
    width = 43,
    height = 15,
    activeOutlineColor = "#E4E4E4",
    outlineColor = "#3D3E41",
    textColor = "#E4E4E4",
    borderRadius = 2,
    error = false,
    errorMessage = '* Error: Reporting Time is required',
    fontSize = 2,
    iconColor = '#FFC727',
    disabled = true,
    onChangeDate = () => { },
}) => {

    const [text, setText]=useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [PickedDate, setPickedDate] = useState("")
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        let tempDate = (date.toISOString()).split('T')[0];
        console.log("Formatted :", tempDate)
        setPickedDate(tempDate)
        setText(tempDate)
        hideDatePicker();
    };

    useEffect(()=>{
        if(PickedDate!==""){
            onChangeDate(PickedDate)
        }
    },[PickedDate])


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
                    height:responsiveWidth(height),
                    textAlign:'center',
                }}
                placeholder={placeHolder}
                activeOutlineColor={activeOutlineColor}
                placeholderTextColor={disabled?"#fff":textColor}
                outlineColor={outlineColor}
                textColor={disabled?"#fff":textColor}
                onChangeText={(text) => {setText(text);onChangeText(text)}}
                autoCapitalize="none"
                blurOnSubmit={false}
                keyboardType="default"
                returnKeyType="done"
                outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
                value={text}
                disabled={disabled}
                right={<TextInput.Icon icon={(props) => <Icon name="calendar-month" color={iconColor} size={responsiveWidth(8)} onPress={showDatePicker}/>} />}
            />
            {error && errorMessage && (
                <HelperText type="error" style={{marginLeft:responsiveWidth(3),color:"#F42D2D"}}>{errorMessage}</HelperText>
            )}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
        </>
    );
};