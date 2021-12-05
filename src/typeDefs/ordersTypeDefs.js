import { gql } from "apollo-server-core";

const ordersTypes = gql`
	type Order {
		id: String!
		name: String!
		username: String!
		status: String!
		productId: String!
		quantity: Int!
		at_created: String!
	}

	enum OrderStatus {
		completed
		cancelled
		pending
	}

	input OrderAdd {
		name: String!
		username: String!
		productId: String!
		quantity: Int!
		status: OrderStatus!
	}

	type Query {
		getOrdersByUsername(username: String!): [Order]
	}

	type Mutation {
		saveOrder(orderInput: OrderAdd!): Order!
		deleteOrderById(orderId: String!): String!
	}
`;

export default ordersTypes;
