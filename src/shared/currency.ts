import { ValueListFieldType } from 'remult';

export class Currency {
  constructor(
    public id: number,
    public caption: string,
    public symbol: string
  ) {}
  static shekel = new Currency(1, 'Shekel', '₪');
  static dollar = new Currency(2, 'Dollar', '$');
  static euro = new Currency(3, 'Euro', '€');
  static pound = new Currency(4, 'Pound', '£');
  static yen = new Currency(5, 'Yen', '¥');
}
ValueListFieldType()(Currency);
