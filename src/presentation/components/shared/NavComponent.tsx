import { NavigationObject } from "@presentation/navigation/NavObject";
import LoginScreen from "@presentation/screen/login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NavigationComponent = () => {
    return (
        <NavigationContainer
            // initialState={() => { return console.log(""); }}
            onReady={() => { console.log("nav ready ") }}
            // onStateChange={(state) => { console.log("state change : ", state) }}
            // theme
            // linking
            // fallback
            // documentTitle
            // children
            // ref
        >
            <Stack.Navigator initialRouteName={NavigationObject.login.routeName}>
                {
                    Object.values(NavigationObject).map((item, index) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={item.routeName}
                                component={item.component}
                                navigationKey={item.title}
                                options={{ title: item.title, headerShown: false }}
                                initialParams={{ title: item.title, routeName: item.routeName }}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationComponent;