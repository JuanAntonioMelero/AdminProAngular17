import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasProductosService {

  constructor( private http: HttpClient ) { }

  get headers() {
    return {
      headers: {
       
      }
    }
  }

  cargarCategoriasProductos() {

    const url = `${ base_url }/categoriasProductos`;
    return this.http.get( url, this.headers )
              .pipe(
                map( (resp:any) => resp.categoriasProductos )
              );
  }

  crearCategoria( nombre: string ) {
    console.log(nombre);

    const url = `${ base_url }/categoriasProductos`;
    return this.http.post( url, { nombre }, this.headers );
  }

}
