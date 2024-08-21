import { DefaultTheme, Theme } from "@react-navigation/native";

export const CustomTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
        text: 'black',
    },
};