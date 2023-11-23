import React, { useEffect, useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DatePickerInterface } from "../../interface/datePicker/DatePickerInterface";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from "../../theme/ColorsConstant";

export const DatePicker: React.FC<
  DatePickerInterface & { onChangeDate: (text: string) => void }
> = ({
  placeHolder = "",
  backgroundColor = Colors.backgroundColor,
  mode = "outlined",
  width = 100,
  height = 15,
  activeOutlineColor = Colors.activeOutlineColor,
  outlineColor = Colors.outlineColor,
  textColor = Colors.textColor,
  borderRadius = 2,
  error = false,
  errorMessage = "",
  fontSize = 2,
  iconColor = Colors.iconColor,
  errorColor = Colors.errorColor,
  iconSize = 8,
  placeholderTextColor = Colors.placeholderTextColor,
  onChangeDate = () => {},
  minimumDate = null,
  maximumDate = null,
}) => {
  const [text, setText] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [PickedDate, setPickedDate] = useState("");

  console.log("visible", isDatePickerVisible);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    let tempDate = date.toISOString().split("T")[0];
    console.log("Formatted :", tempDate);
    setPickedDate(date.toISOString());
    setText(tempDate);
    hideDatePicker();
  };

  useEffect(() => {
    if (PickedDate !== "") {
      onChangeDate(PickedDate);
    }
  }, [PickedDate]);

  return (
    <>
      <TextInput
        theme={{ colors: { onSurfaceVariant: textColor } }}
        mode="outlined"
        style={{
          backgroundColor: backgroundColor,
          alignSelf: "center",
          width: responsiveWidth(width),
          fontSize: responsiveFontSize(fontSize),
          height: responsiveWidth(height),
          textAlign: "center",
        }}
        placeholder={placeHolder}
        activeOutlineColor={activeOutlineColor}
        placeholderTextColor={placeholderTextColor}
        outlineColor={outlineColor}
        textColor={textColor}
        onChangeText={(text) => {
          setText(text);
        }}
        autoCapitalize="none"
        blurOnSubmit={false}
        keyboardType="default"
        returnKeyType="done"
        outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
        value={text}
        disabled={true}
        right={
          <TextInput.Icon
            icon={(props) => (
              <Icon
                name="calendar-month"
                color={iconColor}
                size={responsiveWidth(iconSize)}
                onPress={showDatePicker}
                style={{ marginTop: responsiveWidth(2) }}
              />
            )}
          />
        }
      />
      {error && errorMessage && (
        <HelperText
          type="error"
          style={{ marginLeft: responsiveWidth(3), color: errorColor }}
        >
          {errorMessage}
        </HelperText>
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    </>
  );
};
