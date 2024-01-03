import * as React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationBarInterface } from "../../interface/navigation/NavigationBarInterface";
import { Colors } from "../../theme/ColorsConstant";
import { Icons } from "../iconFolder";
const Tab = createBottomTabNavigator();

export const NavigationBar: React.FC<NavigationBarInterface> = ({
  tabScreens,
  tabBarStyle,
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  iconColor,
  createIconSize = 20,
  middleIconStyle,
}) => {
  const mergedTabBarStyle = StyleSheet.compose(
    styles.defaultTabBarStyle,
    tabBarStyle
  );

  const middleIcon = StyleSheet.compose(styles.iconStyle, middleIconStyle);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: mergedTabBarStyle,
          tabBarIcon: ({ focused, color, size }) => {
            const selectedTab = tabScreens.find(
              (tab) => tab.name === route.name
            );

            if (selectedTab) {
              if (selectedTab.name === "Live") {
                return (
                  <View style={middleIcon}>
                    <Icons
                      name={"radio"}
                      size={responsiveHeight(createIconSize)}
                      color={iconColor}
                    />
                  </View>
                );
              }

              if (selectedTab.name === "Create") {
                return (
                  <View style={middleIcon}>
                    <Icons
                      name={"plus-circle"}
                      size={responsiveHeight(createIconSize)}
                      color={iconColor}
                    />
                  </View>
                );
              }

              if (selectedTab.name === "Event") {
                return <Icons name="ticket" color={color} size={size} />;
              }

              if (selectedTab.name === "Home") {
                return <Icons name="home" color={color} size={size} />;
              }

              if (selectedTab.name === "Team") {
                return <Icons name="people" color={color} size={size} />;
              }

              if (selectedTab.name === "Profile") {
                return <Icons name="person" color={color} size={size} />;
              }

              if (selectedTab.name === "History") {
                return <Icons name="time" color={color} size={size} />;
              }
            }
          },
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarInactiveTintColor: tabBarInactiveTintColor,
        })}
      >
        {tabScreens.map(({ name, component, icon, options }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={options}
            tabBarIcon={({ focused, color, size }) => (
              <Ionicons
                name={focused ? `${icon}-sharp` : `${icon}-outline`}
                size={size}
                color={color}
              />
            )}
            listeners={({ navigation, route }) => ({
              focus: (e) => {
                if (route.name === "Create") {
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: "CreateEventController" }],
                    })
                  );
                }
              },
            })}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  defaultTabBarStyle: {
    borderTopLeftRadius: responsiveWidth(7),
    borderTopRightRadius: responsiveWidth(7),
    paddingBottom: responsiveWidth(5),
    paddingTop: responsiveWidth(5),
    height: responsiveWidth(30),
  },
  iconStyle: {
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: responsiveHeight(2),
  },
});
