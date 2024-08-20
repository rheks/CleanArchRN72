import React, { useState } from "react";
import { Text, View } from "react-native";
import { login } from "@application/redux/actions/LoginAction";

export default function LoginScreen(): JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = () => {
    //     login({ username, password });
    // };

    return (
        <View>
            <Text>Login Screen</Text>
        </View>
    );
}
