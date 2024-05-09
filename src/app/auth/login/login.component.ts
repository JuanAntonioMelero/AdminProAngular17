import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;
  public auth2: any;

  public loginForm:FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor( private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone ) { }
  ngOnInit(): void {
    
  }

  login() {

    this.usuarioService.login( this.loginForm.value )
      .subscribe( resp => {

       
        localStorage.removeItem('email');
        

        // Navegar al Dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
         // Si sucede un error
         
         console.log(err);
         Swal.fire({
          title:'Error', 
          text:err.error.msg || 'Email/Password obligatorio',
          icon: 'error',
          confirmButtonText:'Ok',
          
        });
      });

  }

}
