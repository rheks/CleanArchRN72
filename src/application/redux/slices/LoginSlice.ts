import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../types/LoginType";

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
			// Remove non-numeric characters except the leading '+'
			let phone = action.payload.replace(/[^\d]/g, '');

			// Extract numeric part of country code
			const countryCodeNumeric = state.countryPhoneCode.replace(/\D/g, ''); // "62" for +62

			// If phone starts with a "0" immediately after the country code, remove it
			if (phone.startsWith(countryCodeNumeric) && phone[countryCodeNumeric.length] === '0') {
				phone = countryCodeNumeric; // Reset to just the country code if invalid input
			}

			// Ensure the phone starts with country code
			if (!phone.startsWith(countryCodeNumeric)) {
				phone = countryCodeNumeric + phone;
			}

			// Remove the '+' from the formatted phone for comparison
			let formattedPhone = phone.replace(new RegExp(`^${countryCodeNumeric}`), `${state.countryPhoneCode}-`);

			// Format after country code: three digits first, then groups of four
			formattedPhone = formattedPhone.replace(new RegExp(`^(\\+${countryCodeNumeric})-(\\d{3})(\\d+)`), (match, p1, p2, p3) => {
				let formatted = `${p1}-${p2}`;
				formatted += `-${p3.replace(/(\d{4})(?=\d)/g, '$1-')}`; // Group subsequent digits by four
				return formatted;
			});

			// Handle the case where fast deletion could lead to a hanging dash
			if (formattedPhone === `${state.countryPhoneCode}-` || formattedPhone === `${state.countryPhoneCode}-0`) {
				state.phone = ""; // Clear the phone number
			} else {
				state.phone = formattedPhone;
			}
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
