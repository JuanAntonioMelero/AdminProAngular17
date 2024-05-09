import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent,
    

  ],
  exports:[
    DonaComponent,
    IncrementadorComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
     
  ]
})
export class ComponentsModule { }
