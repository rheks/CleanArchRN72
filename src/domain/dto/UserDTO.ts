import { User } from "@domain/entities/User";

export interface UserDTO {
	id: string;
	username: string;
	email: string;
	token: string;
}

export const toUserDTO = (user: User): UserDTO => ({
	id: user.id,
	username: user.username,
	email: user.email,
	token: user.token,
});
