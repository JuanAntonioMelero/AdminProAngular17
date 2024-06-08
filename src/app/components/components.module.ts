import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ModalCrearCategoriasProductosComponent } from './modal-crear-categorias-productos/modal-crear-categorias-productos.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent,
    ModalImagenComponent,
    BarChartComponent,
    PieChartComponent,
    ModalCrearCategoriasProductosComponent,
    CardComponent,
    

  ],
  
  exports:[
    DonaComponent,
    IncrementadorComponent,
    ModalImagenComponent,
    BarChartComponent,
    PieChartComponent,
    ModalCrearCategoriasProductosComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    MaterialModule,
    PipesModule

  ]
})
export class ComponentsModule { }
