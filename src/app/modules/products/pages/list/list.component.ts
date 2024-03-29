import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  cart = this.cartService.cart;

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next : (products) => {
          this.products.set(products);
        },
        error : (err) => {
          alert(err);
        }
      })
  }

  handleAddToCart = (product: Product) => {
    this.cartService.addToCart(product);
  }
}
