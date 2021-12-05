import { authResolver } from "./authResolver.js";
import { productsResolver } from "./productsResolver.js";
import { ordersResolver } from "./ordersResolver.js";
import lodash from "lodash";

const resolvers = lodash.merge(authResolver, productsResolver, ordersResolver);
export default resolvers;
