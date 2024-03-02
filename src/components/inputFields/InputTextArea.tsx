import React, { useState, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HelperText, TextInput } from "react-native-paper";
import { InputTextAreaInterface } from "../../interface/inputFields/InputTextAreaInterface";
import { Colors } from "../../theme/ColorsConstant";
import {
  KeyboardTypeOptions,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export const InputTextArea: React.FC<
  InputTextAreaInterface & { onChangeText: (text: string) => void }
> = ({
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
  errorMessage = "",
  fontSize = 2,
  multiline = true,
  numberOfLines = 5,
  errorColor = Colors.errorColor,
  placeholderTextColor = Colors.placeholderTextColor,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  value = "",
  infoMessage = "",
  infoDisplay = false,
  onChangeText = () => {},
  fontFamily,
}) => {
  const [areaText, setAreaText] = useState<string>("");
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  useEffect(() => {
    if (value !== null) {
      setAreaText(value);
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
              fontFamily: fontFamily,
            }}
            activeOutlineColor={activeOutlineColor}
            placeholder={placeHolder}
            placeholderTextColor={placeholderTextColor}
            outlineColor={outlineColor}
            textColor={textColor}
            onChangeText={(text) => {
              setAreaText(text);
              onChangeText(text);
            }}
            autoCapitalize="none"
            blurOnSubmit={true}
            keyboardType="default"
            returnKeyType="done"
            outlineStyle={{ borderRadius: responsiveWidth(borderRadius) }}
            value={areaText}
            multiline={multiline}
            numberOfLines={numberOfLines}
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
                <Entypo name="info-with-circle" size={24} color="black" />
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
              marginLeft: responsiveWidth(3),
              color: errorColor,
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
});
