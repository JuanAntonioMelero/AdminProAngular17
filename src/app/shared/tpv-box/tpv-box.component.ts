import { Component, Input, OnInit } from '@angular/core';
import { ProductosPedidos } from '../../models/productosPedido.model';

@Component({
  selector: 'app-tpv-box',
  templateUrl: './tpv-box.component.html',
  styleUrl: './tpv-box.component.css'
})
export class TpvBoxComponent implements OnInit {
  public suma=0;
  @Input('productosPedido2') productosPedido2: ProductosPedidos[]=[];
  ngOnInit(): void {
  }
  aumentarUnidad(producto:string){
    for (let i=0;i<this.productosPedido2.length;i++){
      if (this.productosPedido2[i].nombre===producto){
        this.productosPedido2[i].unidades++;
      }
    }
  }
  reducirUnidad(producto:string){
    
    for (let i=0;i<this.productosPedido2.length;i++){

      if (this.productosPedido2[i].nombre===producto&&this.productosPedido2[i].unidades==1){
        this.productosPedido2.splice(i,1);
        
      }
      if (this.productosPedido2[i].nombre===producto){
        this.productosPedido2[i].unidades--;
      
      }
    }
  }

  importeProducto(unidades:number, precio:number){
    
    return unidades*precio;
    
  }
  sumaProductos(){
    this.suma=0;
    for (let i=0;i<this.productosPedido2.length;i++){
      this.suma=this.suma+(this.productosPedido2[i].precio*this.productosPedido2[i].unidades)
    }
    return this.suma;
  }
}
