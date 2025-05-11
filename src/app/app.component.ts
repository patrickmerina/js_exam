import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'js_tech_exam';
  totalItems: number = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartTotal().subscribe((total) => {
      this.totalItems = total;
    });
    // this.cartService.getCartData();
  }
}
