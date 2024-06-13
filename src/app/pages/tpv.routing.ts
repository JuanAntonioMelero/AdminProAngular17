import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';
import { TpvComponent } from './tpv/tpv.component';
import { DashboardComponent } from './tpv/dashboard/dashboard.component';
import { ProductosPorCategoriasComponent } from './tpv/productos-por-categorias/productos-por-categorias.component';

const routes: Routes = [
    { path: 'tpv', 
    component: TpvComponent,
    canActivate: [ AuthGuard ],
    children: [
        { path: '', component: DashboardComponent },
        { 
            path: ':categoria', 
            component: ProductosPorCategoriasComponent,
     
        },
    ]},
   
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TpvRoutingModule {}


