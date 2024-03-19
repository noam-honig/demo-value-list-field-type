import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { getValueList, repo } from 'remult';
import { Currency } from '../shared/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'remult-angular-todo';
  products: Product[] = [];

  ngOnInit(): void {
    repo(Product)
      .find({})
      .then((products) => {
        this.products = products;
      });
  }
  async addProduct() {
    try {
      this.products.push(await repo(Product).insert(this.newProduct));
      this.newProduct = new Product();
    } catch (err: any) {
      alert(err.message);
    }
  }

  newProduct: Product = new Product();
  currencies = getValueList(Currency);
}
