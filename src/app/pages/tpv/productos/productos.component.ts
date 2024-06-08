import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Productos } from '../../../models/productos';
import { ProductoService } from '../../../services/producto.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
}) 
export class ProductosComponent implements OnInit, OnDestroy {
  private imgSubs!: Subscription;
  @Input('productos') productos!: Productos[];
  @Output() addProductosPedidoEvent = new EventEmitter<Productos>();

  constructor( private productosService:ProductoService,
    private rutaActiva: ActivatedRoute
  ){}
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }
  ngOnInit(): void {}
  sendAddProductoPedido(producto:Productos) {
    this.addProductosPedidoEvent.emit(producto);
  }

async abrirModal() {
  
  const { value = '' } = await Swal.fire<string>({
    title: 'Crear Producto',
    
    text: 'Ingrese el nombre del nuevo producto',
    input: 'text',
    inputPlaceholder: 'Nombre del producto',
    showCancelButton: true,
  });
  
  if( value.trim().length > 0 ) {
    this.productosService.crearProducto( value, this.rutaActiva.snapshot.params['categoria'] )
      .subscribe( (resp: any) => {
      this.productos.push( resp )
      })
  }
}

}
