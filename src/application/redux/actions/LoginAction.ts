import { loginService } from "@application/services/LoginService";
import { toUserDTO } from "@domain/dto/UserDTO";
import { User } from "@domain/entities/User";

/* eslint-disable prettier/prettier */
export const submitLogin = async (credentials: { username: string; password: string }) => {
	const { username, password } = credentials;
	const user: User = await loginService(username, password);
	return toUserDTO(user);
};
