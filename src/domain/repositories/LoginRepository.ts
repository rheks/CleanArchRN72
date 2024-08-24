import { toUserDTO } from "@domain/dto/UserDTO";
import { User } from "@domain/entities/User";
import { ILoginRepository } from "@domain/interfaces/ILoginRepository";
import { setLoginUser } from "@infrastructure/api/ApiLogin";

export const loginRepository: ILoginRepository = {
	login: async (username: string, password: string): Promise<User> => {
		const userDTO = await setLoginUser(username, password);
		return toUserDTO(userDTO);
	},
};
