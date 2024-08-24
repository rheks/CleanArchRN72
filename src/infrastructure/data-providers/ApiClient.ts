import axios from "axios";

const axiosRequest = (options: any) => {
	const apiClientInstance = axios.create({
		baseURL: "https://api.example.com",
	});

	const token = "";

	options["headers"] = {
		Authorization: `Bearer ${token}`,
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		crossorigin: true,
		"App-Locale": "id",
		"Content-Type": "multipart/form-data",
	};

	return apiClientInstance(options).then(handleAxiosSuccess).catch(handleAxiosError);
};

const handleAxiosSuccess = (response: any, disableDebugManually: boolean = true) => {
	if ((__DEV__ && disableDebugManually) || !disableDebugManually) {
		console.log("res handleAxiosSuccess", response);
	}
	return response.data;
};

const handleAxiosError = (error: any): AxiosErrorResponse => {
	if (__DEV__) {
		console.log("err handleAxiosError", {
			response: error.response,
			request: error.request,
			config: error.config,
			code: error.code,
			message: error.message,
		});
	}

	if (error.response) {
		return {
			status: error.response.status,
			message: error.response.data?.message || "An error occurred",
			data: error.response.data,
		};
	} else {
		return {
			status: 500,
			message: "Network Error",
			data: [],
		};
	}
};

export default axiosRequest;
