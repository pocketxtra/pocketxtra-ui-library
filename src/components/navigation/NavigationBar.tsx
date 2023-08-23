import * as React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationBarInterface } from "../../interface/navigationBar/NavigationBarInterface";
import {Colors} from '../../theme/ColorsConstant'
const Tab = createBottomTabNavigator();

export const NavigationBar: React.FC<NavigationBarInterface> = ({
  tabScreens,
  tabBarStyle,
  tabBarActiveTintColor = Colors.activeOutlineColor,
  tabBarInactiveTintColor = Colors.outlineColor,
  iconColor = Colors.iconColor,
  createIconSize = 20
}) => {
  const mergedTabBarStyle = StyleSheet.compose(
    styles.defaultTabBarStyle,
    tabBarStyle,
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: mergedTabBarStyle,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            const selectedTab = tabScreens.find(
              (tab) => tab.name === route.name
            );

            if (selectedTab) {
              iconName = focused
                ? `${selectedTab.icon}-sharp`
                : `${selectedTab.icon}-outline`;

              if (selectedTab.name === "Create") {
                return (
                  <View>
                    <Ionicons
                      name={selectedTab.icon}
                      size= {responsiveHeight(createIconSize)}
                      color= {iconColor}
                    />
                  </View>
                );
              }
            }
            return <Ionicons name={iconName} size={size} color={color} />;
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
    backgroundColor: "#000000",
  },
});
