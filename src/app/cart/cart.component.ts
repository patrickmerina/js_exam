import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total: number = 0;
  discount: number = 0;
  disablePromoButton: boolean = false;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((data) => {
      this.items = data;

      if (this.items) this.getTotal(this.items);
    });
  }

  onDelete(index: number) {
    this.items.splice(index, 1);
    this.cartService.setCartData(this.items);

    this.getTotal(this.items);
  }

  validateInput(event: any, index: number) {
    const quantityInput = +event.target.value;
    if (quantityInput < 1) {
      event.target.value = this.items[index].quantity;
    }

    this.updatedQuantity(quantityInput, index);
  }

  private updatedQuantity(quantity: number, index: number) {
    this.items[index].quantity = quantity;
    this.cartService.setCartData(this.items);

    this.getTotal(this.items);
  }

  getTotal(data: any) {
    let subs = 0;
    for (const item of data) {
      subs += item.price * item.quantity;
      this.total = subs;
    }
  }

  onSubmitPromo(promoCode: string) {
    if (promoCode === 'SAVE10') {
      this.discount = this.total * 0.1;
      this.disablePromoButton = true;
    } else {
      alert('Invalid promo code');
    }
  }
}
