import { RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../server";

export class AuthAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.AUTH_API_URL;
	}
	/**
	 * @name userDetailsById
	 * @description: Get user details by user id
	 * @param userId
	 * @returns Promise<Resolved|Rejected>
	 */
	async userDetailsById(userId) {
		return await this.get(`/user/${userId}/`);
	}

	async signUp(user) {
		const userCleaned = new Object(JSON.parse(JSON.stringify(user)));
		return await this.post("/user/", userCleaned);
	}

	async signIn(credentials) {
		const credentialsCleaned = new Object(JSON.parse(JSON.stringify(credentials)));
		return await this.post("/login/", credentialsCleaned);
	}

	async refreshToken(token) {
		const tokenCleaned = new Object(JSON.parse(JSON.stringify(token)));
		return await this.post("/refresh/", tokenCleaned);
	}

	async updateUser(userId, user) {
		const userCleaned = new Object(JSON.parse(JSON.stringify(user)));
		return await this.put(`/user/${userId}/update/`, userCleaned);
	}

	async deleteUser(userId) {
		return await this.delete(`/user/${userId}/delete/`);
	}
}
