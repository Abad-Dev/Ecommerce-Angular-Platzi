import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';
import { CurrencyPipe } from '@angular/common';
import { ToshortPipe } from '@shared/pipes/toshort.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, ToshortPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler = () => {
    this.addToCart.emit(this.product.title + " ha sido enviado al carrito");
  }
}
