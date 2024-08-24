import { User } from "@domain/entities/User";
import { loginRepository } from "@domain/repositories/LoginRepository";

export const loginService = async (username: string, password: string): Promise<User> => {
	return await loginRepository.login(username, password);
};
