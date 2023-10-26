import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconsInterface } from "../../interface/icons/IconsInterface";
import Icon from "react-native-vector-icons/Ionicons";
import MUI from "react-native-vector-icons/MaterialCommunityIcons";
import Font5 from "react-native-vector-icons/FontAwesome5"
import MI from "react-native-vector-icons/MaterialIcons"
import Oct from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import Font from "react-native-vector-icons/FontAwesome"
import Ant from "react-native-vector-icons/AntDesign"

export const Icons: React.FC<IconsInterface> = ({
     name,
     size,
     color 
    }) => {

  switch (name) {
    case "location":
        return <Icon name={"location-sharp"} size={size} color={color}/>;
    case "home":
        return <Feather name={name} size={size} color={color}/>;
    case "check-circle" :
        return <MUI name={name} size={size} color={color}/>;
    case "info" :
        return <MUI name={"information-outline"} size={size} color={color}/>;
    case "image":
        return <Icon name={name} size={size} color={color}/>;
    case "graduation-cap":
        return <Font5 name={name} size={size} color={color}/>;
    case "book-open":
        return <Font5 name={name} size={size} color={color}/>;
    case "arrow-back":
        return <Icon name={name} size={size} color={color}/>;
    case "dollar-sign":
        return <Font5 name={name} size={size} color={color}/>;
    case "search":
        return <Icon name={name} size={size} color={color}/>;
    case "filter-outline":
        return <MUI name={name} size={size} color={color}/>;
    case "sort":
        return <MUI name={"sort-variant"} size={size} color={color}/>;
    case "call":
        return <Icon name={name} size={size} color={color}/>;
    case "checkBox":
        return <MUI name={"checkbox-multiple-outline"} size={size} color={color}/>;
    case "star":
        return <Ant name={name} size={size} color={color}/>;
    case "pencil":
        return <Icon name={name} size={size} color={color}/>;
    case "time":
        return <Icon name={"time-outline"} size={size} color={color}/>;
    case "arrow-drop-down":
        return <MI name={"arrow-drop-down"} size={size} color={color}/>;
    case "ticket":
        return <MUI name={"ticket-confirmation-outline"} size={size} color={color}/>;
    case "radio":
        return <Feather name={name} size={size} color={color}/>;
    case "people":
        return <Oct name={name} size={size} color={color}/>;
    case "person":
        return <Oct name={name} size={size} color={color}/>;
    case "dot-circle-o" :
        return <Font name={name} size={size} color={color}/>
    case "rupee" :
        return <Font name={name} size={size} color={color}/>
    case "hourglass":
        return <Font5 name={name} size={size} color={color}/>;
    case "timer":
        return <MUI name={name} size={size} color={color}/>;
    case "keyboard-arrow-right" :
        return <MI name={name} size={size} color={color}/>;
    case "warning" :
        return <Icon name={name} size={size} color={color}/>;
    case "person-outline" :
        return <Icon name={name} size={size} color={color}/>;
    case "logout" :
        return <MI name={name} size={size} color={color}/>;
    case "heart":
        return <Ant name={"hearto"} size={size} color={color}/>;
    case "bell":
        return <Oct name={name} size={size} color={color}/>;
    case "plus-circle":
        return <Feather name={name} size={size} color={color}/>;
    default:
      return null;
  }
};