/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { User } from "../entities/User";

export interface ILoginRepository {
	login(username: string, password: string): Promise<User>;
}
