export interface NavigationBarInterface {
    tabScreens: {
        name: string;
        component: React.FC;
        icon: string;
        options?: object;
    }[];
    tabBarStyle?: object;
    tabBarActiveTintColor?: string;
    tabBarInactiveTintColor?: string;
    iconColor?: string;
    createIconSize?: number;
    middleIconStyle?: object;
}