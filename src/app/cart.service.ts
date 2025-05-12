import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  placeholder: Product[] = [];
  cartItems = new BehaviorSubject<Product[]>([]);
  numOfItems = new BehaviorSubject<number>(0);

  constructor() {
    const cache = this.getCartData();
    if (cache) this.cartItems.next(cache);
  }

  addItem(product: Product) {
    const cache = this.getCartData();
    let productExist: Product | undefined = undefined;

    if (cache) {
      productExist = cache.find((item: { id: number }) => {
        return item.id === product.id;
      });
    }

    console.log('product Exist', productExist);

    if (productExist) {
      productExist.quantity++;
      this.setCartData(cache);
    } else {
      console.log('product does not exist');
      product.quantity = 1; //set quantity to 1 upon adding to cart first time
      if (cache) {
        const newData = [...cache, product];
        this.setCartData(newData);
      } else {
        this.placeholder.push(product);
        this.setCartData(this.placeholder);
      }
    }
    this.getCartTotal();
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }

  getCartData() {
    let cache = localStorage.getItem('cart');
    console.log('getCartData', cache ? JSON.parse(cache) : []);
    return cache ? JSON.parse(cache) : [];
  }

  getCartTotal() {
    // calculates the total quantities of each product.
    const total = this.cartItems.value.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    this.numOfItems.next(total);
    return this.numOfItems;
  }
}
