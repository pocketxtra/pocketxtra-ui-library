import React, { useState, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from "react-native-paper";
import { TextInputOutlinedInterface } from "../../interface/inputFields/TextInputOutlinedInterface";
import {
  KeyboardTypeOptions,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Colors } from "../../theme/ColorsConstant";
import { Entypo } from "@expo/vector-icons";

export const TextInputOutlined: React.FC<
  TextInputOutlinedInterface & { onChangeText: (text: string) => void }
> = ({
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
  errorMessage = "",
  fontSize = 2,
  errorColor = Colors.errorColor,
  disabled = false,
  textAlign = "auto",
  placeholderTextColor = Colors.placeholderTextColor,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  height = 20,
  value = "",
  errorFontSize = 2,
  onChangeText = () => {},
  fontFamily,
  infoMessage = "",
  infoDisplay = false,
  infoColor = Colors.textColor,
}) => {
  const [text, setText] = useState<string>("");
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };
  useEffect(() => {
    if (value !== null) {
      setText(value);
    }
  }, [value]);
  return (
    <>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: responsiveHeight(marginTop),
          marginBottom: responsiveHeight(marginBottom),
          marginLeft: responsiveWidth(marginLeft),
          marginRight: responsiveWidth(marginRight),
        }}
      >
        <View>
          <TextInput
            label={label}
            theme={{ colors: { onSurfaceVariant: textColor } }}
            mode="outlined"
            style={{
              backgroundColor: backgroundColor,
              alignSelf: "center",
              width: responsiveWidth(width),
              fontSize: responsiveFontSize(fontSize),
              textAlign: textAlign,
              height: responsiveWidth(height),
              fontFamily: fontFamily,
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
            blurOnSubmit={true}
            keyboardType={keyboardType as KeyboardTypeOptions}
            returnKeyType="done"
            maxLength={maxLength}
            outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
            value={text}
            disabled={disabled}
          />
          {infoDisplay ? (
            <View
              style={[
                { width: responsiveWidth(width / 1.2) },
                styles.container,
              ]}
            >
              {isInfoVisible && (
                <View style={styles.infoBox}>
                  <Text style={styles.infoText}>{infoMessage}</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={toggleInfo}
              >
                <Entypo name="info-with-circle" size={24} color={infoColor} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
      <View>
        {error && errorMessage && (
          <HelperText
            type="error"
            style={{
              color: errorColor,
              fontSize: responsiveFontSize(errorFontSize),
              fontFamily: fontFamily,
            }}
          >
            {errorMessage}
          </HelperText>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2,
    marginRight: 5,
    marginTop: 3,
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  infoIcon: {
    fontSize: 20,
  },
  infoBox: {
    maxWidth: "95%",
    bottom: "100%",
    right: 5,
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    opacity: 0.9,
  },
  infoText: {
    fontWeight: "bold",
  },
});
