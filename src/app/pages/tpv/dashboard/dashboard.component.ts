import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productos } from '../../../models/productos.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy{
  public productos: Productos[] = [];

  constructor( private productosService: ProductoService){}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    
    this.cargarProductos();  
  }
  cargarProductos() {  
    this.productosService.cargarProductos()
    .subscribe( (productos ) => {
      this.productos = productos;
      
    })
  } 
}
