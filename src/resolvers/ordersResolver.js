export const ordersResolver = {
	Query: {
		getOrdersByUsername: async (_, { username }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);

			if (usernameToken.username == username) {
				return await dataSources.OrdersAPI.getOrdersByUsername(username);
			} else {
				return null;
			}
		},
	},
	Mutation: {
		saveOrder: async (_, { orderInput }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);
			if (usernameToken.username == orderInput.username) {
				return await dataSources.OrdersAPI.saveOrder(orderInput);
			} else {
				return null;
			}
		},
		deleteOrderById: async (_, { orderId }, { dataSources, userIdToken }) => {
			const usernameToken = await dataSources.AuthAPI.userDetailsById(userIdToken);
			const usernameProduct = await dataSources.OrdersAPI.getOrdersByUsername(
				usernameToken.username
			);

			if (usernameToken.username == usernameProduct[0].username) {
				return await dataSources.OrdersAPI.deleteOrderById(orderId);
			} else {
				return null;
			}
		},
	},
};
