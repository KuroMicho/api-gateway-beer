import { gql } from "apollo-server-core";

const productsTypes = gql`
	type Product {
		id: String!
		username: String!
		name: String!
		description: String!
		style: String!
		category: [String]!
		image: String!
		price: Int!
		avg_grade: Float!
		ibu_grade: Float!
		at_created: String!
		at_modified: String!
	}

	input ProductAdd {
		username: String!
		name: String!
		description: String!
		style: String!
		category: [String]!
		image: String!
		price: Int!
		avg_grade: Float!
		ibu_grade: Float!
	}

	input ProductUpdate {
		id: String!
		username: String!
		name: String!
		description: String!
		style: String!
		category: [String]!
		image: String!
		price: Int!
		avg_grade: Float!
		ibu_grade: Float!
	}

	type Query {
		getProductsByUsername(username: String!): [Product]
	}

	type Mutation {
		saveProduct(productInput: ProductAdd!): Product!
		updateProduct(productInput: ProductUpdate!): Product!
		deleteProductById(productId: String!): String!
	}
`;

export default productsTypes;
