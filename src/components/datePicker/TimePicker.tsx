import React, { useEffect, useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TimePickerInterface } from "../../interface/datePicker/TimePickerInterface";
import { Colors } from "../../theme/ColorsConstant";

export const TimePicker: React.FC<
  TimePickerInterface & { onChangeTime: (text: string) => void }
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
  iconSize = 8,
  errorColor = Colors.errorColor,
  placeholderTextColor = Colors.placeholderTextColor,
  onChangeTime = () => {},
}) => {
  const [text, setText] = useState("");
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [PickedTime, setPickedTime] = useState("");

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    const dateObject = new Date(date);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const formattedTime = `${hours12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${amOrPm}`;

    console.log(formattedTime);
    setPickedTime(formattedTime);
    setText(formattedTime);
    hideTimePicker();
  };

  useEffect(() => {
    if (PickedTime !== "") {
      onChangeTime(PickedTime);
    }
  }, [PickedTime]);

  return (
    <>
      <TextInput
        theme={{ colors: { onSurfaceVariant: "#E4E4E4" } }}
        mode="outlined"
        style={{
          backgroundColor: backgroundColor,
          alignSelf: "center",
          width: responsiveWidth(width),
          fontSize: responsiveFontSize(fontSize),
          height: responsiveWidth(height),
          justifyContent: "center",
          textAlign: "center",
        }}
        activeOutlineColor={activeOutlineColor}
        placeholder={placeHolder}
        placeholderTextColor={placeholderTextColor}
        outlineColor={outlineColor}
        textColor={textColor}
        onChangeText={(text) => {
          setText(text);
          onChangeText(text);
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
                name="clock-time-three-outline"
                color={iconColor}
                size={responsiveWidth(iconSize)}
                onPress={showTimePicker}
                style={{marginTop:responsiveWidth(4)}}
              />
            )}
            style={{ marginTop: responsiveWidth(3) }}
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
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </>
  );
};
