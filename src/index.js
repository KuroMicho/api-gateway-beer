import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import authentication from "./utils/authentication";
import { AuthAPI } from "./dataSources/authAPI";
import { ProductsAPI } from "./dataSources/productsAPI";
import { OrdersAPI } from "./dataSources/ordersAPI";

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
