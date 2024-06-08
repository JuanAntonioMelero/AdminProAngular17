import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public usuario: Usuario;
  
  constructor( private usuarioService: UsuarioService ) {
    this.usuario = usuarioService.usuario;
  }

  
  logout() {
    this.usuarioService.logout();
  }

}
