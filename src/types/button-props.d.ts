import { LucideIcon } from "lucide-react-native";

export interface ButtonProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    variant?: "link" | "outline" | "solid",
    action?: "primary" | "secondary" | "positive" | "negative" | "default",
    isHovered?: boolean,
    isPressed?: boolean,
    isFocused?: boolean,
    isDisabled?: boolean,
    styleButton?: ViewStyle,
    onPress?: (data: any) => void,
    textButton: string,
    isSpinnerButtonLeft?: boolean
    IconButtonLeft?: typeof LucideIcon,
    styleButtonText?: ViewStyle,
    isSpinnerButtonRight?: boolean
    IconButtonRight?: typeof LucideIcon,
}