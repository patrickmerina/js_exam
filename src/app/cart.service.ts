import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  numOfItems = new BehaviorSubject<number>(0);

  constructor() {}

  addItem(product: Product) {
    const productExist = this.cartItems.find((item) => {
      return item.id === product.id;
    });

    if (productExist) {
      console.log('product exist');
      productExist.quantity++;
    } else {
      console.log('product does not exist');
      product.quantity = 1;
      this.cartItems.push(product);
    }

    // calculates the total quantities of each product.
    const total = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.numOfItems.next(total);

    console.log(total);
  }

  getCartTotal() {
    return this.numOfItems;
  }
}
