import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Productos } from '../../../models/productos.model';
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
  @Input('categoria') categoria!: string;

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
  
  const { value:productoRequest  } = await Swal.fire({
    title: 'Crear Producto',
    showCancelButton: true,
    
    html:
    '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
    '<input id="precio" type="number" class="swal2-input" placeholder="Precio">',
  preConfirm: () => ({
    nombre: $('#nombre').val(),
    precio: $('#precio').val()
  }
  
)
  
  });
  
  if( productoRequest ) {
    console.log(productoRequest,this.categoria);
    this.productosService.crearProducto( productoRequest.nombre, productoRequest.precio, this.categoria )
      .subscribe( (resp: any) => {
      this.productos.push( resp )
      })
  }
}

}
