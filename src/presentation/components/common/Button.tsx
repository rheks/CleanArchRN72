import { Button, ButtonGroup, ButtonSpinner, ButtonText } from "@gluestack-ui/themed"
import { ButtonProps } from "@types/button-props"

const ButtonComponent = (props: ButtonProps) => {

    return (
        <Button
            size={props.size}
            variant={props.variant}
            action={props.action}
            isHovered={props.isHovered}
            isPressed={props.isPressed}
            isFocused={props.isFocused}
            isDisabled={props.isDisabled}
            style={{ marginHorizontal: 10, ...props.styleButton }}
            onPress={props.onPress}
        >
            {props.IconButtonLeft}
            {props.isSpinnerButtonLeft && <ButtonSpinner />}
            <ButtonText style={{ paddingHorizontal: 10, ...props.styleButtonText }}>{props.textButton}</ButtonText>
            {props.isSpinnerButtonRight && <ButtonSpinner />}
            {props.IconButtonRight}
        </Button>
    )
}

export default ButtonComponent;