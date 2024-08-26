import React, { useState } from "react";
import { submitLogin } from "@application/redux/actions/LoginAction";
import { EyeIcon, EyeOffIcon, InputIcon, InputSlot, LockIcon, PhoneIcon, Text, VStack } from "@gluestack-ui/themed";
import InputComponent from "@presentation/components/common/Input";
import { useAppDispatch, useAppSelector } from "@application/redux/hook";
import { setPassword, setPhoneNumber } from "@application/redux/slices/LoginSlice";
import ButtonComponent from "@presentation/components/common/Button";
import { AlignCenter, Pencil } from "lucide-react-native";

export default function LoginScreen(): JSX.Element {
    const dispatch = useAppDispatch()
    const { phone, password, countryPhoneCode } = useAppSelector(state => state.login)

    const [isShowPassword, setIsShowPassword] = useState(true)

    const handleShowPassword = () => {
        setIsShowPassword((showState) => { return !showState })
    }

    const handleLogin = () => {
        submitLogin({ username: phone, password });
    };

    return (
        <VStack style={{ flex: 1, padding: 10, backgroundColor: "transparent" }}>
            <InputComponent
                value={phone}
                textLabel={'Phone'}
                variant={'outline'}
                size={'xl'}
                typeInput={'text-input'}
                keyboardType={'numeric'}
                InputFieldPlaceholder={countryPhoneCode}
                onChangeText={(e) => dispatch(setPhoneNumber(e))}
                inputIconLeftName={
                    <InputSlot style={{ borderRightWidth: 1.5, borderRightColor: "#000", paddingRight: 10 }}>
                        <InputIcon size={"xl"} as={PhoneIcon} color={"#000"} />
                    </InputSlot>
                }
            />
            <InputComponent
                value={password}
                textLabel={'Password'}
                variant={'outline'}
                size={'xl'}
                typeInput={'text-input'}
                isTextPassword={isShowPassword}
                onChangeText={(e) => dispatch(setPassword(e))}
                inputIconLeftName={
                    <InputSlot style={{ borderRightWidth: 1.5, borderRightColor: "#000", paddingRight: 10 }}>
                        <InputIcon size={"xl"} as={LockIcon} color={"#000"} />
                    </InputSlot>
                }
                inputIconRightName={
                    <InputSlot onPress={handleShowPassword}>
                        <InputIcon size={"xl"} as={isShowPassword ? EyeOffIcon : EyeIcon} color={"#000"} />
                    </InputSlot>
                }
            />

            <ButtonComponent
                size={"xl"}
                textButton={"Login"}
                // IconButtonLeft={
                //     <Pencil size={20} color={"#fff"} />
                // }
                // styleButtonText={{ width: "100%", textAlign: "center" }}
                onPress={() => { console.log("duarr login") }}
            />
        </VStack>
    );
}
