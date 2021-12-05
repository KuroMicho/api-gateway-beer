export const productsResolver = {
	Query: {
		getProductsByUsername: async (_, { username }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);

			if (usernameToken.username == username) {
				return await dataSources.ProductsAPI.getProductsByUsername(username);
			} else {
				return null;
			}
		},
	},
	Mutation: {
		saveProduct: async (_, { productInput }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);
			if (usernameToken.username == productInput.username) {
				return await dataSources.ProductsAPI.saveProduct(productInput);
			} else {
				return null;
			}
		},
		updateProduct: async (_, { productInput }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);
			if (usernameToken.username == productInput.username) {
				return await dataSources.ProductsAPI.updateProduct(productInput);
			} else {
				return null;
			}
		},
		deleteProductById: async (_, { productId }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);
			const usernameProduct = await dataSources.ProductsAPI.getProductsByUsername(
				usernameToken.username
			);

			if (usernameToken.username == usernameProduct[0].username) {
				return await dataSources.ProductsAPI.deleteProductById(productId);
			} else {
				return null;
			}
		},
	},
};
