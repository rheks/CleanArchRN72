interface NavProps {
    [key: string]: {
        title: string;
        routeName: string;
        component: any;
        headerShown?: boolean;
        needAuth?: boolean;
        tabBar?: boolean;
        iconTabBar?: any;
        titleTabBar?: string;
        listTabBar?: any;
        isRTLHeader?: boolean;
        headerBackVisible?: boolean;
    };
}