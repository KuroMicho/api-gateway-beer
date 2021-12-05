import { RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../server";

export class ProductsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.BEER_API_URL;
	}

	async getProductsByUsername(username) {
		return await this.get(`/api/v1/products/${username}`);
	}

	async saveProduct(product) {
		const productCleaned = new Object(JSON.parse(JSON.stringify(product)));
		return await this.post("/api/v1/products", productCleaned);
	}

	async updateProduct(product) {
		const productCleaned = new Object(JSON.parse(JSON.stringify(product)));
		return await this.put(`/api/v1/products/update`, productCleaned);
	}

	async deleteProductById(productId) {
		return await this.delete(`/api/v1/products/delete/${productId}`);
	}
}
