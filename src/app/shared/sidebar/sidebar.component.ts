import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public usuario!: Usuario;

  constructor( 
    public sidebarService: SidebarService,
    private usuarioService: UsuarioService
   ) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    $('#sidebarnav').AdminMenu();   
  }
}
