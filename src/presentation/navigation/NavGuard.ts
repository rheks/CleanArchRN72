import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<any>();

export const appLinking = {
    prefixes: ['https://myapp.com', 'myapp://'],
    config: {
        screens: {
            HomeRoute: 'home',
            LoginRoute: 'login',
        },
    },
}

export const CustomNavigate = (
    routeName: string,
    type: 'navigate' | 'reset' | 'back',
    params?: any,
    withAuth: boolean = true,
) => {
    const navigateType = () => {
        switch (type) {
            case 'navigate':
                navigationRef.navigate(routeName, params);
                break;
            case 'reset':
                navigationRef.reset({
                    index: 0,
                    routes: [{ name: routeName, params: params }],
                });
                break;
            case 'back':
                navigationRef.goBack();
                break;
            default:
                break;
        }
    };

    try {
        navigateType();
    } catch (error) {
        console.log("error custom navigation : ", error);
    }
}