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

  menuItems: any[] | undefined;
  public usuario!: Usuario;

  constructor( 
    private sidebarService: SidebarService,
    private usuarioService: UsuarioService
   ) {
    
  }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
    this.usuario = this.usuarioService.usuario;
  }

  ngAfterViewInit(): void {
    $('#sidebarnav').AdminMenu();   
  }
}
