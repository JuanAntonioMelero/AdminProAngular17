import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Productos } from '../models/productos.model';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  cargarProductos( ) {

    const url = `${ base_url }/productos/`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp:any) => resp.productos )
              );
  }

  cargarProductosPorCategoria( termino:string) {

    const url = `${ base_url }/productos/${ termino }`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp:any) => resp.productos )
              );
  }
  crearProducto( nombre: string, precio:number, categoria:string ) {
    const url = `${ base_url }/productos`;
    return this.http.post( url, { nombre, precio, categoria }, this.headers );
  }
  
}
