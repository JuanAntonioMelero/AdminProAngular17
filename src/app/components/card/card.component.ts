import { Component, Input } from '@angular/core';
import { Productos } from '../../models/productos.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public producto!: Productos;

}
