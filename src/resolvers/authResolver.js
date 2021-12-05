export const authResolver = {
	Query: {
		userDetailsById: async (_, { userId }, { dataSources, userIdToken }) => {
			console.log(userId, userIdToken);
			if (userId == userIdToken) return await dataSources.AuthAPI.userDetailsById(userId);
			else return null;
		},
	},
	Mutation: {
		signUp: async (_, { userInput }, { dataSources }) => {
			const authInput = {
				username: userInput.username,
				password: userInput.password,
				email: userInput.email,
			};
			return await dataSources.AuthAPI.signUp(authInput);
		},

		signIn: async (_, { userInput }, { dataSources }) => {
			return await dataSources.AuthAPI.signIn(userInput);
		},

		refreshToken: async (_, { refresh }, { dataSources }) => {
			return await dataSources.AuthAPI.refreshToken(refresh);
		},

		updateUser: async (_, { userId, userInput }, { dataSources, userIdToken }) => {
			if (userId == userIdToken) return await dataSources.AuthAPI.updateUser(userId, userInput);
			else return null;
		},

		deleteUser: async (_, { userId }, { dataSources, userIdToken }) => {
			if (userId == userIdToken) return await dataSources.AuthAPI.deleteUser(userId);
		},
	},
};
