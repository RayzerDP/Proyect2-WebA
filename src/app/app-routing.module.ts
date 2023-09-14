import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPComponent } from './pages/menu-p/menu-p.component';
import { BuscarPComponent } from './pages/buscar-p/buscar-p.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  {path:'',component:MenuPComponent},
  {path:'menu-p', component:MenuPComponent},
  {path:'search-p', component:BuscarPComponent},
  {path:'projects', component:ProyectsComponent},
  {path:'**', redirectTo: 'menu-p'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
