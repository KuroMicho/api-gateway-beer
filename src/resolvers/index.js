import { authResolver } from "./authResolver";
import { productsResolver } from "./productsResolver";
import { ordersResolver } from "./ordersResolver";
import lodash from "lodash";

const resolvers = lodash.merge(authResolver, productsResolver, ordersResolver);
export default resolvers;
