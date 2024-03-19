import { Entity, Field, Fields, repo } from 'remult';
import { Currency } from './currency';
@Entity('products', {
  allowApiCrud: true,
})
export class Product {
  @Fields.cuid()
  id = '';
  @Fields.string()
  name = '';
  @Fields.number()
  price = 0;
  @Field(() => Currency)
  currency = Currency.shekel;
}
