import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { TpvRoutingModule } from './pages/tpv.routing';

const routes: Routes = [
   
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   
    { path: '**', component: NopagefoundComponent }, 
   

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    TpvRoutingModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
