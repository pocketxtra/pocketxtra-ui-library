export interface NavigationBarInterface {
    tabScreens?: TabScreen[],
    tabBarStyle?: TabBarStyle,
    tabBarActiveTintColor?: string,
    tabBarInactiveTintColor?: string,
    height?: number,
    iconColor?: string,
    createIconSize?: number,
    middleIconStyle: {
        backgroundColor?: string;
        height?: number;
        width?: number;
        display?: string;
        justifyContent?: string;
        borderRadius?: number;
        marginTop?: number;
    }
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