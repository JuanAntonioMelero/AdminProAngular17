import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Productos } from '../../models/productos';
import { ProductoService } from '../../services/producto.service';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-tpv',
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.css'
})
export class TpvComponent  implements OnInit, OnDestroy {
  public productos: Productos[] = [];
  public categoria!: string;
  private imgSubs!: Subscription;
  public pedido:Pedido[]=[];
  
  receiveMessage($event: Productos) {
    this.productos.push($event);
  }
  receiveCategoria($event: string) {
    this.cargarProductos($event); 
    console.log(this.categoria);
  }
  receiveAddProductosPedido($event: Productos){
    this.pedido.push($event);
    console.log(this.pedido);
  } 
  constructor(  private productosService:ProductoService 
  ) { }

   cargarProductos(categoria:string) {  
    this.productosService.cargarProductosPorCategoria(categoria)
        .subscribe( (productos: Productos[]) => {
         
          this.productos = productos;
          console.log(productos);
        })
  } 
     ngOnDestroy(): void {
      this.imgSubs.unsubscribe();
    }
    ngOnInit(): void { 
      this.cargarProductos('');
     }
  
  }