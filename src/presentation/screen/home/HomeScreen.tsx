import { navigationRef } from "@presentation/navigation/NavGuard";
import { NavigationObject } from "@presentation/navigation/NavObject";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

const HomeScreen: React.FC = () => {
	return (
		<View>
			<Text style={{ color: "red" }}>Home Screen</Text>
			<TouchableOpacity onPress={() => navigationRef.navigate(NavigationObject.login.routeName)}>
				<Text>Go to Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
