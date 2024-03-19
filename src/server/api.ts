import { remultExpress } from 'remult/remult-express';
import { Product } from '../shared/product.js';

export const api = remultExpress({
  entities: [Product],
  admin: true,
});
