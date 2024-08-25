import { HStack, Input, InputField, Text, VStack } from "@gluestack-ui/themed";
import { InputProps } from "@types/input-props";
import { CircleAlert } from "lucide-react-native";

const InputComponent = (props: InputProps) => {

    const labelComponent = props.textLabel ? <Text style={{ fontWeight: "bold", color: "#000", ...props.styleLabel }}>{props.textLabel}</Text> : null;
    const iconLeftComponent = props.inputIconLeftName ? props.inputIconLeftName : null
    const iconRightComponent = props.inputIconRightName ? props.inputIconRightName : null

    const renderInputComponent = () => {
        let renderChild = <></>
        switch (props.typeInput) {
            case "text-input":
                renderChild = <Input
                    variant={props.variant}
                    size={props.size}
                    isDisabled={props.isDisabled}
                    isInvalid={props.isInvalid}
                    isReadOnly={props.isReadOnly}
                    style={{ display: "flex", alignItems: "center", borderRadius: 15, paddingHorizontal: 10, ...props.styleInput }}
                >
                    {iconLeftComponent}
                    <InputField
                        type={props.isTextPassword ? "password" : "text"}
                        keyboardType={props.keyboardType ? props.keyboardType : "default"}
                        value={props.value}
                        placeholder={props.InputFieldPlaceholder}
                        onChangeText={props.onChangeText}
                        style={{ ...props.styleInputField }}
                    />
                    {iconRightComponent}
                </Input>
        }
        return renderChild
    }

    const renderTextInputHelper = () => {
        if (props.textInputHelper) {
            return (
                <VStack style={{ ...props.styleInputHelper }}>
                    <Text style={{ ...props.styleTextInputHelper }}>
                        {props.textInputHelper}
                    </Text>
                </VStack>
            )
        }

        return null;
    }

    const renderTextInputError = () => {
        if (props.textInputError) {
            return (
                <HStack space="xs" style={{ display: "flex", alignItems: "center", ...props.styleInputError }}>
                    {props.iconInputError ? props.iconInputError : <CircleAlert size={"20"} color={"red"} />}
                    <Text style={{ ...props.styleTextInputError }}>
                        {props.textInputError}
                    </Text>
                </HStack>
            )
        }

        return null;
    }

    const renderParentInput = () => {
        let renderParent = <VStack style={{ padding: 10, ...props.styleContainerInput }}>
            {labelComponent}
            {renderInputComponent()}
            {renderTextInputHelper()}
            {renderTextInputError()}
        </VStack>

        return renderParent;
    }

    return renderParentInput();
}

export default InputComponent;