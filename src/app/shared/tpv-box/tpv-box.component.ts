import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-tpv-box',
  templateUrl: './tpv-box.component.html',
  styleUrl: './tpv-box.component.css'
})
export class TpvBoxComponent implements OnInit {
  productos!: Productos[];
  @Input('pedido') pedido!: Pedido[];
  ngOnInit(): void {
    
  }
  
}
