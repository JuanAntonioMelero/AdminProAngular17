import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TpvComponent } from './tpv.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalCrearCategoriasProductosComponent } from '../../components/modal-crear-categorias-productos/modal-crear-categorias-productos.component';
import { ComponentsModule } from '../../components/components.module';
import { ProductosComponent } from './productos/productos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipesModule } from '../../pipes/pipes.module';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductosPorCategoriasComponent } from './productos-por-categorias/productos-por-categorias.component';



@NgModule({
  declarations: [
   TpvComponent,
   ProductosComponent,
   NavBarComponent,
   DashboardComponent,
   ProductosPorCategoriasComponent
   
  ],
  exports:[
    TpvComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    PipesModule,
    MaterialModule,
    RouterModule
  ]
})
export class TPVModule { }
