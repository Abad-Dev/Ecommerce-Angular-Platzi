import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler = () => {
    this.addToCart.emit(this.title + " ha sido enviado al carrito");
  }
}
