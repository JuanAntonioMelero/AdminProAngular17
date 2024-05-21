import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent,
    ModalImagenComponent,
    BarChartComponent,
    PieChartComponent,
    

  ],
  exports:[
    DonaComponent,
    IncrementadorComponent,
    ModalImagenComponent,
    BarChartComponent,
    PieChartComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    

  ]
})
export class ComponentsModule { }
