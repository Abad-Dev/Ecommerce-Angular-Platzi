import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() id?: string;
  
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit() {
    this.productService.getProductById(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0){
            this.cover.set(product.images[0])
          }
        }
      })
  }

  handleClick = () => {
    if (this.product != null)
      this.cartService.addToCart(this.product()!);
  }

  setCover = (url: string) => {
    this.cover.set(url);
  }
}
