import { LucideIcon } from "lucide-react-native";

export interface InputProps {
    styleLabel?: TextStyle,
    textLabel?: string,
    variant?: "rounded" | "outline" | "underlined",
    size?: "sm" | "md" | "lg" | "xl",
    isDisabled?: boolean,
    isInvalid?: boolean,
    isReadOnly?: boolean,
    styleInput?: ViewStyle,
    inputIconLeftName?: typeof LucideIcon,
    isTextPassword?: boolean,
    keyboardType?: KeyboardTypeOptions | undefined,
    value?: string,
    InputFieldPlaceholder?: string,
    onChangeText?: (text?: any) => void,
    styleInputField?: ViewStyle,
    inputIconRightName?: typeof LucideIcon,
    typeInput?: string,
    styleInputHelper?: ViewStyle,
    styleTextInputHelper?: TextStyle,
    textInputHelper?: string,
    styleInputError?: ViewStyle,
    iconInputError?: typeof LucideIcon,
    styleTextInputError?: TextStyle,
    textInputError?: string,
    styleContainerInput?: ViewStyle,
}