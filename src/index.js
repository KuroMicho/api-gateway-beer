import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
import authentication from "./utils/authentication.js";
import { AuthAPI } from "./dataSources/authAPI.js";
import { ProductsAPI } from "./dataSources/productsAPI.js";
import { OrdersAPI } from "./dataSources/ordersAPI.js";

const server = new ApolloServer({
	context: authentication,
	typeDefs,
	resolvers,
	dataSources: () => ({
		AuthAPI: new AuthAPI(),
		ProductsAPI: new ProductsAPI(),
		OrdersAPI: new OrdersAPI(),
	}),
	introspection: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
