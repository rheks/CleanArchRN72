import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../types/LoginType";

const initialState: LoginState = {
	phone: "",
	passcode: 0,
	alertLogin: "",
	countryPhoneCode: "",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setPhoneNumber: (state, action) => {
			state.phone = action.payload;
		},
		setCountryPhoneCode(state, action) {
			state.countryPhoneCode = action.payload;
		},
	},
});

export const { setPhoneNumber, setCountryPhoneCode } = loginSlice.actions;

export default loginSlice.reducer;
