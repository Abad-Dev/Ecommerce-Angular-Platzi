import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private cartService = inject(CartService);
  products = signal<Product[]>([]);
  cart = this.cartService.cart;

  constructor (){
    const initProds: Product[] = [
      {
        id: Date.now(),
        img: 'https://picsum.photos/200/300?r=2', 
        title: 'Prod1',
        price: 50,
      }
    ]

    this.products.set(initProds);
  }

  handleAddToCart = (product: Product) => {
    this.cartService.addToCart(product);
  }
}
