const phoneFormatter = (input: string, countryPhoneCode: string): string => {
    // Remove non-numeric characters except the leading '+'
    let phone = input.replace(/[^\d]/g, '');

    // Extract numeric part of country code
    const countryCodeNumeric = countryPhoneCode.replace(/\D/g, ''); // "62" for +62

    // If phone starts with a "0" immediately after the country code, remove it
    if (phone.startsWith(countryCodeNumeric + '0')) {
        phone = countryCodeNumeric; // Reset to just the country code if invalid input
    }

    // Ensure the phone starts with the country code
    if (!phone.startsWith(countryCodeNumeric)) {
        phone = countryCodeNumeric + phone;
    }

    // Format the phone number: +62-813-8286-8571
    let formattedPhone = phone.replace(
        new RegExp(`^${countryCodeNumeric}`),
        `${countryPhoneCode}-`
    );

    // Format after the country code: three digits first, then groups of four
    formattedPhone = formattedPhone.replace(
        new RegExp(`^(\\+${countryCodeNumeric})-(\\d{3})(\\d+)`),
        (match, p1, p2, p3) => {
            let formatted = `${p1}-${p2}`;
            formatted += `-${p3.replace(/(\d{4})(?=\d)/g, '$1-')}`; // Group subsequent digits by four
            return formatted;
        }
    );

    // Handle the case where fast deletion could lead to a hanging dash or `-0`
    if (formattedPhone === `${countryPhoneCode}-` || formattedPhone === `${countryPhoneCode}-0`) {
        return ""; // Clear the phone number if it's just the country code and a dash
    } else {
        return formattedPhone;
    }
};

export default phoneFormatter;