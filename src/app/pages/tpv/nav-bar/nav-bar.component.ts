import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CategoriasProductos } from '../../../models/categoriasProductos.model';
import { CategoriasProductosService } from '../../../services/categoriasProductos';
import { Productos } from '../../../models/productos.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  implements OnInit, OnDestroy {

  public categorias: CategoriasProductos[] = [];
  public producto:Productos={
    nombre:'prueba1',
    categoria:'comidas',
    precio:0
  }
  @Output() categoriaEvent = new EventEmitter<string>();

  constructor( 
    private categoriasProductosService: CategoriasProductosService,
   
     ) { }
     ngOnDestroy(): void {
    }
    ngOnInit(): void {
      this.cargarCategoriasProductos();
    }
    cargarCategoriasProductos() {  
      this.categoriasProductosService.cargarCategoriasProductos()
          .subscribe( categorias => {
           
            this.categorias = categorias;
          })
  
    } 
    sendCategoria(categoria:string){
      this.categoriaEvent.emit(categoria);
    }
}
