import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { GestionArticulosComponent } from './gestion-articulos/gestion-articulos.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent , children: [
    { path: 'registro', component: RegistroComponent },
    {path: 'articulos', component: ListaArticulosComponent},
    {path: 'gestion', component: GestionArticulosComponent}
  
  ]},
  { path: 'bienvenida', component: BienvenidaComponent }, 
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
