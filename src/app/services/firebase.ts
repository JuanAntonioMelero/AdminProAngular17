import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const base_url = environment.base_url2;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private http: HttpClient ) { }

  get headers() {
    return {
      headers: {
       
      }
    }
  }

  cargarProductos() {
    const url = `${ base_url }/students`;
   
    return this.http.get( url, this.headers )
    .pipe(
      map( (resp:any) => resp )
    );
             ;
  }


  crearProducto( firstName: string ) {
    console.log(firstName);

    const url = `${ base_url }/student`;
    return this.http.post( url, { firstName }, this.headers );
  }

}
