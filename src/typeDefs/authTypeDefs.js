import { gql } from "apollo-server-core";

const authTypes = gql`
	input SignUp {
		username: String!
		email: String!
		password: String!
	}

	type SignInTokens {
		refresh: String!
		access: String!
	}

	input SignIn {
		username: String!
		password: String!
	}

	input Refresh {
		refresh: String!
	}

	type Access {
		access: String!
	}

	type UserDetails {
		id: Int!
		username: String!
		email: String!
	}

	input UserUpdate {
		username: String!
		email: String!
	}

	type Query {
		userDetailsById(userId: Int!): UserDetails
	}

	type Mutation {
		signUp(userInput: SignUp): UserDetails!
		signIn(userInput: SignIn): SignInTokens!
		refreshToken(refresh: Refresh!): Access!
		updateUser(userId: Int!, userInput: UserUpdate): UserDetails!
		deleteUser(userId: Int!): String!
	}
`;

export default authTypes;
