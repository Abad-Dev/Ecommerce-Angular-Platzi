import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';
import { CurrencyPipe } from '@angular/common';
import { ToshortPipe } from '@shared/pipes/toshort.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, ToshortPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product: Product = {
    id: Date.now(),
    images: [],
    title: '',
    price: 0,
    description: '',
  };

  @Output() addToCart = new EventEmitter();

  addToCartHandler = () => {
    this.addToCart.emit(this.product.title + " ha sido enviado al carrito");
  }
}
