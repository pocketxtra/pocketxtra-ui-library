import { View, Text, TextInput, Pressable, Image } from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Pen from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { ExpandableWithSelectionInterface } from "../../interface/expandable/ExpandableWithSelectionInterface"
import {Colors} from '../../theme/ColorsConstant'

export const ExpandableWithSelection: React.FC<
  ExpandableWithSelectionInterface
> = ({
  icon = '',
  iconInfo = '',
  expandableParagraph = '',
  userRole = '',
  successButtonColor = Colors.backgroundColor,
  height = 20,
  width = 100,
  borderRadius = 4,
  borderWidth = 0,
  expandablebackgroundColour = Colors.backgroundColor,
  fontSize = 2,
  iconSize = 9,
  iconColor = Colors.iconColor,
  expandableTextSize = 2,
  textColor = Colors.textColor,
  borderColor = Colors.borderColor,
  expandableTextColor = Colors.textColor,
  imageSource = { uri: 'https://picsum.photos/700' },
  imageSize = 40,
  buttonTextColor = Colors.textColor, 
  infoIconColor = Colors.iconColor
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const [penColor, setPenColor] = React.useState(iconColor);
  const [buttonText, setButtonText] = React.useState("Select");

  const handlePressButton = () => {
    setExpanded(!expanded);
    setPenColor(successButtonColor);
    setButtonText("Selected");
  };

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={{ width: responsiveWidth(width), height: responsiveWidth(height) }}
    >
    <List.Section >
      <List.Accordion
        style={{
          borderColor: borderColor,
          borderRadius: responsiveWidth(borderRadius),
          borderWidth: responsiveWidth(borderWidth),
          width: responsiveWidth(width),
          height: responsiveWidth(height),
          alignSelf: "center",
          backgroundColor: expandablebackgroundColour,
          position: 'absolute'
        }}
        title={userRole}
        right={(props) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Pen
              {...props}
              name={icon}
              size={responsiveWidth(iconSize)}
              color={penColor}
              style={{ alignItems: "center", justifyContent: "center" }}
            />
            <Pen
              {...props}
              name={iconInfo}
              size={25}
              color={infoIconColor}
              style={{ marginLeft: responsiveWidth(3) }}
            />
          </View>
        )}
        left={() => null}
        expanded={expanded}
        onPress={handlePress}
        titleStyle={{
          color: textColor,
          fontSize: responsiveFontSize(fontSize),
          marginBottom: responsiveWidth(2),
        }}
      >
        {expanded && (
          <View
            style={{
              borderWidth: responsiveWidth(borderWidth),
              borderColor: borderColor,
              borderRadius: responsiveWidth(borderRadius),
              alignSelf: "center",
              width: responsiveWidth(width),
              height: "auto",
              backgroundColor: expandablebackgroundColour,
            }}
          >
            <Image
              source={{ uri: imageSource.uri }}
              style={{
                height: responsiveWidth(imageSize),
                width: responsiveWidth(imageSize),
                alignSelf: "center",
                marginBottom: responsiveWidth(10),
                marginTop: responsiveWidth(10),
                marginRight: responsiveWidth(10),
              }}
            />

            <Text
              style={{
                color: expandableTextColor,
                alignItems: "flex-end",
                fontSize: responsiveFontSize(expandableTextSize),
                marginBottom: responsiveWidth(3),
              }}
            >
              {userRole}
            </Text>
            <Text
              style={{
                color: expandableTextColor,
                marginRight: responsiveWidth(10),
              }}
            >
              {expandableParagraph}
            </Text>
            <Pressable
              onPress={handlePressButton}
              style={{
                backgroundColor: successButtonColor,
                width: responsiveWidth(25),
                height: responsiveHeight(6),
                borderRadius: responsiveWidth(3),
                alignSelf: "flex-end",
                marginRight: responsiveWidth(10),
                marginTop: responsiveWidth(5),
                alignItems: "center",
                justifyContent: "center",
                marginBottom: responsiveWidth(12),
              }}
            >
              <Text
                style={{
                  color: buttonTextColor,
                  textAlign: "center",
                }}
              >
                {buttonText}
              </Text>
            </Pressable>
          </View>
        )}
      </List.Accordion>
    </List.Section>
    </View>
  );
};
