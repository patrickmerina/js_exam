import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // change to mock API later
  products: Product[] = [
    new Product(
      1,
      'Watch',
      399,
      'a great product 1',
      0,
      'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_10001801.png'
    ),
    new Product(
      2,
      'Phone',
      499,
      'a great product 2',
      0,
      'https://www.apple.com/v/iphone/home/cb/images/meta/iphone__kqge21l9n26q_og.png'
    ),
    new Product(
      3,
      'Laptop',
      199,
      'a great product 3',
      0,
      'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-pro-11th-edition-color-og-twitter-image?scl=1'
    ),
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
