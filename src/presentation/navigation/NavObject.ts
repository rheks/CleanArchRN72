import HomeScreen from "@presentation/screen/home/HomeScreen";
import LoginScreen from "@presentation/screen/login/LoginScreen";

export const TabObject: NavProps = {
	home: {
		title: "Home",
		routeName: "HomeRoute",
		component: HomeScreen,
		needAuth: true,
		tabBar: true,
		// iconTabBar: HomeIcon,
		// titleTabBar: translate('mobile.global.bottomTab.home'),
	},
};

export const NavigationObject: NavProps = {
	login: {
		title: "Login",
		routeName: "LoginRoute",
		component: LoginScreen,
	},
	home: {
		title: "Home",
		routeName: "HomeRoute",
		component: HomeScreen,
	},
};
