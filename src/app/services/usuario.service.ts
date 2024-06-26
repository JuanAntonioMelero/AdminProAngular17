import { Injectable, NgZone } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Usuario } from '../models/usuario.model';
import { tap, map, catchError } from 'rxjs/operators';
import { CargarUsuario } from '../interfaces/cargar-usuarios.interface';


const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario!: Usuario;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private ngZone: NgZone) { }
    
    get token(): string {
      return localStorage.getItem('token') || '';
    }
  
    get uid():string {
      return this.usuario.uid || '';
    }
    get role():string {
      console.log(this.usuario.role);
      return this.usuario.role || 'USER_ROLE';
    
  }
    
  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  
  guardarLocalStorage( token: string, menu: any, role:string ) {

    localStorage.setItem('token', token );
    localStorage.setItem('menu', JSON.stringify(menu) );
    localStorage.setItem('role', role );
    

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('menu');
    localStorage.removeItem('role');
    this.auth2.signOut().then(() => {
                
      this.ngZone.run(() => {
          this.router.navigateByUrl('/login'); })
       });
              
   }

   validarToken(): Observable<boolean> {
    
    return this.http.get(`${ base_url }/login/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        console.log(resp);
        const { email, google, nombre, role, img = '', uid } = resp.usuario;
        this.usuario = new Usuario( nombre, email, '', img, google, role, uid );
        console.log(this.usuario.role);
        this.guardarLocalStorage( resp.token,  resp.menu, this.usuario.role || 'USER_ROLE');
        return true;
      }),
      catchError( error => of(false) )
    );

  }

  crearUsuario( formData: RegisterForm ) {
    
    return this.http.post(`${ base_url }/usuarios`, formData )
              .pipe(
                tap( (resp: any) => {
                  this.guardarLocalStorage( resp.token,resp.menu,resp.role );
                })
              )

  }


  actualizarPerfil( data: { email: string, nombre: string, role: string } ) {

    data = {
      ...data,
      role: this.usuario.role || ''
    };
    

    return this.http.put(`${ base_url }/usuarios/${ this.uid }`, data, this.headers );

  }



  login( formData: LoginForm ) {
    
    return this.http.post(`${ base_url }/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    this.guardarLocalStorage( resp.token, resp.menu,resp.role, );
                  })
                );

  }

  
  
  cargarUsuarios( desde: number = 0 ) {

    const url = `${ base_url }/usuarios?desde=${ desde }`;
    return this.http.get<CargarUsuario>( url, this.headers )
            .pipe(
              map( resp => {
                const usuarios = resp.usuarios.map( 
                  user => new Usuario(user.nombre, user.email, '', user.img, user.google, user.role, user.uid )  
                );
                return {
                  total: resp.total,
                  usuarios
                };
              })
            )
  }


  eliminarUsuario( usuario: Usuario ) {
    
      // /usuarios/5eff3c5054f5efec174e9c84
      const url = `${ base_url }/usuarios/${ usuario.uid }`;
      return this.http.delete( url, this.headers );
  }

  guardarUsuario( usuario: Usuario ) {

    return this.http.put(`${ base_url }/usuarios/${ usuario.uid }`, usuario, this.headers );

  }

}
