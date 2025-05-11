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
    new Product(
      4,
      'Headphones',
      199,
      'a great product 4',
      0,
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SUFReFd6NEVVOW50TTcxUzVyWlhHZ2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90TzVtaW9peGdOaitwV1Nxb1VublZoTVE'
    ),
    new Product(
      5,
      'Chicken Pastil',
      20,
      'a great product 5',
      0,
      'https://img.lazcdn.com/g/ff/kf/S383e642af0024919adaaeb1b99e98cea2.jpg_360x360q75.jpg_.webp'
    ),
    new Product(
      6,
      'Pansit Canton',
      5,
      'a great product 6',
      0,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRif4S9ispZdJ3NPqDUcB8so07H3AUoZUn8w&s'
    ),
    new Product(
      7,
      'Gaming Mouse',
      69,
      'a great product 7',
      0,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqkQWNDepdDC6uXxoogRJgGPViIcYHKqlGQ&s'
    ),
    new Product(
      8,
      'Mechanical Keyboard',
      99,
      'a great product 8',
      0,
      'https://www.itech.ph/wp-content/uploads/2023/01/PRE-ORDER-Asus-ROG-Azoth-Gaming-Custom-Hotswappable-Mechanical-Keyboard-9-jpg.webp'
    ),
    new Product(
      9,
      'Humidifier',
      33,
      'a great product 9',
      0,
      'https://babymoov.ph/cdn/shop/files/A047011_HYGRO__PACKWEBUNIVERSAL01_3661276144187.jpg?v=1743040637'
    ),
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}
