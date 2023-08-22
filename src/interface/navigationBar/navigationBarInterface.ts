export interface NavigationBarInterface {
    tabScreens?: TabScreen[],
    tabBarStyle?: TabBarStyle,
    tabBarActiveTintColor?: string,
    tabBarInactiveTintColor?: string,
    height?: number,
    iconColor?: string,
    createIconSize?: number
}

interface TabScreen {
    name?: string,
    component?: React.FC,
    icon?: string,
    options?: {
        tabBarLabel?: () => null;
    },
}

interface TabBarStyle {
    borderTopLeftRadius?: number,
    borderTopRightRadius?: number,
    paddingBottom?: number,
    paddingTop?: number,
    height?: number,
    backgroundColor?: string,
}