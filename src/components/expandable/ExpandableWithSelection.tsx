import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  Pressable,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Pen from "react-native-vector-icons/Ionicons";
import { ExpandableWithSelectionInterface } from "../../interface/expandable/expandableWithSelectionInterface";
import { Colors } from "../../theme/ColorsConstant";

export const ExpandableWithSelection: React.FC<
  ExpandableWithSelectionInterface
> = ({
  expandableBgColor = Colors.borderColor,
  themeBackgroundColor = Colors.backgroundColor,
  borderRadius = 3,
  width = 100,
  height = 8,
  title = "",
  textColor = Colors.textColor,
  textSize = 2,
  infoIcon = "",
  mainIcon = "",
  titleDescription = "",
  imageSource = { uri: "https://picsum.photos/700" },
  imageHeight = 50,
  imageWidth = 50,
  successColor = Colors.activeOutlineColor,
  iconColor = Colors.iconColor,
  infoIconSize = 20,
  mainIconSize = 25,
  titleFontSize = 2,
  descriptionFontSize = 1.5,
  titleColor = Colors.textColor,
  descriptionFontColor = Colors.textColor,
  onSelected,
  selected,
  fontFamily,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [mainIconColor, setmainIconColor] = React.useState(iconColor);
  const [buttonText, setButtonText] = React.useState("Select");
  const [value, setValue] = useState(true);

  const handlePressButton = () => {
    setIsExpanded(!isExpanded);
    setmainIconColor(successColor);
    setButtonText("Selected");
    onSelected();
  };

  const ExpandableView: React.FC<{ expanded: boolean }> = ({ expanded }) => {
    const [height] = useState(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(height, {
        toValue: !expanded ? 200 : 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }, [expanded, height]);

    useEffect(() => {
      if (!selected) {
        setmainIconColor(iconColor);
        setButtonText("Select");
      } else {
        setmainIconColor(successColor);
        setButtonText("Selected");
      }
    }, [selected]);

    return (
      <Animated.View
        style={[
          {
            height: !expanded ? "auto" : 0,
            backgroundColor: expandableBgColor,
            borderRadius: responsiveWidth(borderRadius),
            overflow: "hidden",
            width: "100%",
          },
        ]}
      >
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <View style={{ alignSelf: "center", width: "80%" }}>
            <Image
              source={{ uri: imageSource.uri }}
              style={{
                height: responsiveWidth(imageHeight),
                width: responsiveWidth(imageWidth),
                alignSelf: "center",
                marginBottom: responsiveWidth(10),
                marginTop: responsiveWidth(10),
              }}
            />

            <Text
              style={{
                fontSize: responsiveFontSize(titleFontSize),
                marginBottom: "2%",
                color: titleColor,
                fontFamily : fontFamily,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: responsiveFontSize(descriptionFontSize),
                color: descriptionFontColor,
                fontFamily : fontFamily,
              }}
            >
              {titleDescription}
            </Text>
            <Pressable
              onPress={handlePressButton}
              style={{
                backgroundColor: successColor,
                width: responsiveWidth(25),
                height: responsiveHeight(6),
                borderRadius: responsiveWidth(3),
                alignSelf: "flex-end",
                marginTop: responsiveWidth(10),
                alignItems: "center",
                justifyContent: "center",
                marginBottom: responsiveWidth(10),
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontFamily : fontFamily,
                }}
              >
                {buttonText}
              </Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View
      style={{
        width: responsiveWidth(width),
        backgroundColor: themeBackgroundColor,
      }}
    >
      {isExpanded && (
        <TouchableOpacity
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
          style={{
            width: "100%",
            height: responsiveHeight(height),
            backgroundColor: expandableBgColor,
            justifyContent: "center",
            borderRadius: responsiveWidth(borderRadius),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: textColor,
                  fontSize: responsiveFontSize(textSize),
                  fontFamily : fontFamily,
                }}
              >
                {title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pen
                name={mainIcon}
                size={mainIconSize}
                color={mainIconColor}
                style={{ marginRight: "4%" }}
              />
              <Pen name={infoIcon} size={infoIconSize} color={iconColor} />
            </View>
          </View>
        </TouchableOpacity>
      )}
      <ExpandableView expanded={isExpanded} />
    </View>
  );
};
