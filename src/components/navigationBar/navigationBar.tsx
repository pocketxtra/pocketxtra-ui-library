import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { navigationBarInterface } from '../../interface/navigationBar/navigationBarInterface';

const Tab = createBottomTabNavigator();

export const NavigationBar : React.FC<navigationBarInterface> = ({
  tabScreens,
  tabBarStyle,
  tabBarActiveTintColor = '#B0E50E',
  tabBarInactiveTintColor = 'gray',
}) => {

  const mergedTabBarStyle = StyleSheet.compose(
    styles.defaultTabBarStyle,
    tabBarStyle
  );

  return (
    <NavigationContainer>
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarStyle: mergedTabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          const selectedTab = tabScreens.find((tab) => tab.name === route.name);
  
          if (selectedTab) {
            iconName = focused
              ? `${selectedTab.icon}-sharp`
              : `${selectedTab.icon}-outline`;
  
            if (selectedTab.name === 'Create') {
              return (
                <View>
                  <Ionicons name={selectedTab.icon} size={50} color="#B0E50E" />
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
}

const styles = StyleSheet.create({
  defaultTabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    paddingTop: 20,
    height: 90,
    ...Platform.select({
      ios: {
        backgroundColor: '#101318',
      },
      android: {
        elevation: 8,
        backgroundColor: '#101318',
      },
    }),
  },
});

