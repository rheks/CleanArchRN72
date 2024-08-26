import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../types/LoginType";
import phoneFormatter from "@utils/phoneFormatter";

const initialState: LoginState = {
	phone: "",
	password: "",
	alertLogin: "",
	countryPhoneCode: "+62",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setPhoneNumber: (state, action) => {
			state.phone = phoneFormatter(action.payload, state.countryPhoneCode);
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setCountryPhoneCode(state, action) {
			state.countryPhoneCode = action.payload;
		},
	},
});

export const {
	setPhoneNumber,
	setPassword,
	setCountryPhoneCode
} = loginSlice.actions;

export default loginSlice.reducer;
