import { RESTDataSource } from "apollo-datasource-rest";
import serverConfig from "../server.js";

export class OrdersAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.BEER_API_URL;
	}

	async getOrdersByUsername(username) {
		return await this.get(`/api/v1/orders/${username}`);
	}

	async saveOrder(order) {
		const orderCleaned = new Object(JSON.parse(JSON.stringify(order)));
		return await this.post("/api/v1/orders", orderCleaned);
	}

	async deleteOrderById(orderId) {
		return await this.delete(`/api/v1/orders/delete/${orderId}`);
	}
}
