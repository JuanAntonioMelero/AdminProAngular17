import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  public formSubmitted = false;
  public registerForm:FormGroup = this.fb.group({
    nombre: ['Fernando', Validators.required ],
    email: ['test100@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2') 
  } 
);

  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router ) { }
  
  
    crearUsuario() {
      this.formSubmitted = true;
      console.log( this.registerForm.value );
  
      if ( this.registerForm.invalid ) {
        return;
      }
  
      // Realizar el posteo
      this.usuarioService.crearUsuario( this.registerForm.value )
          .subscribe( resp => {
            
            // Navegar al Dashboard
            this.router.navigateByUrl('/');
  
          }, (err) => {
            // Si sucede un error
           console.log(err);
          });
  
  
    }
  
    campoNoValido( campo: string ): boolean {
      
    
        return false;
      
  
    }
  
    contrasenasNoValidas() {
     
  
    }
  
    aceptaTerminos() {
     
    }
  
    passwordsIguales(pass1Name: string, pass2Name: string ) {
  
     
    }
}
