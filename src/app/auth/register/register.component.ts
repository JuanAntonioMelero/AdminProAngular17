import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import Validation from '../../utils/validation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;
  public registerForm:FormGroup = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  constructor( private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router ) { }

    get f(): { [key: string]: AbstractControl } {
      return this.registerForm.controls;
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

    onSubmit(): void {
      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
      }

      console.log(JSON.stringify(this.registerForm.value, null, 2));
      console.log(this.registerForm.value);
        // Realizar el posteo
        this.usuarioService.crearUsuario( this.registerForm.value )
        .subscribe( resp => {

          // Navegar al Dashboard
          this.router.navigateByUrl('/');

        }, (err) => {
          // Si sucede un error

         console.log(err);
         Swal.fire({
          title:'Error',
          text:err.error.msg || 'Email incorrecto',
          icon: 'error',
          confirmButtonText:'Ok',

        });
        });

    }
    ngOnInit(): void {
      this.registerForm = this.fb.group(
        {

          nombre: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(20),
            ],
          ],
          email: ['', [Validators.required, Validators.email]],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(40),
            ],
          ],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue],
        },
        {
          validators: [Validation.match('password', 'confirmPassword')],
        }
      );
    }


  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
