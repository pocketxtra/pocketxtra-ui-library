import { View, Text, TextInput } from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Pen from "react-native-vector-icons/Ionicons";
import { List } from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { ExpandableInputInterface } from '../../interface/expandable/expandableInputInterface'
import { Colors } from "../../theme/ColorsConstant";

export const ExpandableWithInputs: React.FC<ExpandableInputInterface> = ({
  icon = '',
  width = 100,
  title = '',
  height = 20,
  bgColor = Colors.backgroundColor,
  borderRadius = 3,
  borderWidth = 0,
  borderColor = Colors.borderColor,
  iconColor = Colors.iconColor,
  textColor = Colors.textColor,
  textSize = 2,
  iconSize = 7,
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View
      style={{ width: responsiveWidth(width), height: responsiveWidth(height) }}
    >
      <List.Section>
        <List.Accordion
          title={title}
          titleStyle={{
            color: textColor,
            fontSize: responsiveFontSize(textSize),
            alignItems: "center",
            justifyContent: "center",
          }}
          left={() => null}
          style={{
            borderColor: borderColor,
            borderRadius: responsiveWidth(borderRadius),
            borderWidth: responsiveWidth(borderWidth),
            width: responsiveWidth(width),
            height: responsiveWidth(height),
            alignSelf: "center",
            backgroundColor: bgColor,
            position: 'absolute'
          }}
          right={(props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                {...props}
                name={expanded ? icon : icon}
                size={responsiveWidth(iconSize)}
                color={iconColor}
              />
            </View>
          )}
        >
          {expanded && (
            <View
              style={{
                borderWidth: responsiveWidth(borderWidth),
                borderColor: borderColor,
                borderRadius: responsiveWidth(borderRadius),
                alignSelf: "center",
                width: responsiveWidth(width),
                height: 70,
                paddingBottom: responsiveWidth(10),
                backgroundColor: bgColor,
              }}
            />
          )}
        </List.Accordion>
      </List.Section>
    </View>
  );
};
