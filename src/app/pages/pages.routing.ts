import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { ProductosComponent } from './mantenimientos/productos/productos.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent, data: {
                breadcrumb: 'progress'
              }, },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario' }},
                       // Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuario de aplicación' }},
            { path: 'productos', component: ProductosComponent, data: { titulo: 'Poductos' }},
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' }},
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Hospitales' }},
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Matenimiento de Medicos' }},

        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


