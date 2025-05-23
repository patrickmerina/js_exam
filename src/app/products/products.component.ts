import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { NgFor } from '@angular/common';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  imports: [NgFor, CartComponent], //imported NgFor so I can use it in the HTML
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
    //this.add = this.productService.addToCart(id)
    //this.remove = this.productService.removeProductToCart(id)
    //this.update = this.productService.updateProductToCart(id, operation)
    // this.cartService.getCartData();
  }

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}
