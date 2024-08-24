import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { submitLogin } from "@application/redux/actions/LoginAction";
import { NavigationObject } from "@presentation/navigation/NavObject";
import { navigationRef } from "@presentation/navigation/NavGuard";

export default function LoginScreen(): JSX.Element {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		submitLogin({ username, password });
	};

	return (
		<View>
			<Text style={{ color: "red" }}>Login Screen</Text>
			<TouchableOpacity onPress={() => navigationRef.navigate(NavigationObject.home.routeName)}>
				<Text>Go to Home</Text>
			</TouchableOpacity>
		</View>
	);
}
