import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { BusquedasService } from '../../../services/busquedas.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { Productos } from '../../../models/productos';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit, OnDestroy {

  public totalProductos: number = 0;
  public productos: Productos[] = [];
  public productosTemp: Productos[] = [];
  public imgSubs!: Subscription;
  public desde: number = 0;
  public cargando: boolean = true;
  public imgTemp: any = null;
  constructor( 
    private productosService: ProductoService,
    private busquedasService: BusquedasService,
    private modalImagenService: ModalImagenService ) { }
    
    ngOnDestroy(): void {
      this.imgSubs.unsubscribe();
    }
    
    ngOnInit(): void {
    this.cargarProductos();

    this.imgSubs = this.modalImagenService.nuevaImagen
      .pipe(delay(100))
      .subscribe( img => this.cargarProductos() );
  }

  
  cargarProductos() { 
    this.cargando = true; 
    this.productosService.cargarProductos()
        .subscribe( (productos ) => {
          this.productos = productos;
          this.productosTemp = productos;
          this.cargando = false;
        })
  } 

  cambiarPagina( valor: number ) {
    this.desde += valor;

    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalProductos ) {
      this.desde -= valor; 
    }

    this.cargarProductos();
  }
  
  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.productos = this.productosTemp;
    }

    this.busquedasService.buscar( 'productos', termino )
        .subscribe( resp => {

          this.productos = resp;

        });
  }

  eliminarUsuario( usuario: Productos ) {
  }
  abrirModal(producto: Productos) {

    this.modalImagenService.abrirModal( 'productos', producto._id!, producto.img );
  }

}
