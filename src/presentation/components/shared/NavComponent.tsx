import { CustomTheme } from "@presentation/assets/styles/GlobalStyle";
import { appLinking, navigationRef } from "@presentation/navigation/NavGuard";
import { NavigationObject } from "@presentation/navigation/NavObject";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const NavigationComponent = () => {
	const scheme = useColorScheme(); // use operating system preferences theme
	console.log("scheme os : ", scheme);

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={appLinking}
			theme={scheme === "dark" ? DarkTheme : CustomTheme}
			onReady={() => {
				console.log("nav ready ");
			}}
			onStateChange={state => {
				console.log("state change : ", state);
			}}
		>
			<Stack.Navigator initialRouteName={NavigationObject.login.routeName}>
				{Object.values(NavigationObject).map((item, index) => {
					return (
						<Stack.Screen
							key={index}
							name={item.routeName}
							component={item.component}
							navigationKey={item.title}
							options={{ title: item.title, headerShown: false }}
							initialParams={{ title: item.title, routeName: item.routeName }}
						/>
					);
				})}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavigationComponent;
