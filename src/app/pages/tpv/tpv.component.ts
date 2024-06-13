import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productos } from '../../models/productos.model';
import { ProductoService } from '../../services/producto.service';
import { ProductosPedidos } from '../../models/productosPedido.model';

@Component({
  selector: 'app-tpv',
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.css'
})
export class TpvComponent  implements OnInit, OnDestroy {
  
  public total =0;
  index!:number;
  public productos: Productos[] = [];
  public categoria!: string;
  public productosPedido2:ProductosPedidos[]=[]; 
  public suma=0;
  constructor(  private productosService:ProductoService 
  ) { }

  
  receiveCategoria($event: string) {
    this.cargarProductos($event); 
    this.categoria=$event;
    console.log(this.categoria);
  }

  receiveAddProductosPedido($event: Productos){
    this.index=this.productosPedido2.findIndex(x=> x.nombre===$event.nombre);
    if (this.index>-1){
      //console.log("el elemento esta repetido");
      //console.log(this.index); 
      this.productosPedido2[this.index].unidades++;
    }
   else{
    this.productosPedido2.push({
      nombre:$event.nombre,
      precio:$event.precio,
      unidades:1
    }  ) ;
    
   }
   
   
    } 

   cargarProductos(categoria:string) {  
    this.productosService.cargarProductosPorCategoria(categoria)
        .subscribe( (productos: Productos[]) => {
         
          this.productos = productos;
        })
  } 
     ngOnDestroy(): void {
    }
    ngOnInit(): void { 
      this.cargarProductos('');
     }
   
  }