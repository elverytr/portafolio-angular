import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import {Err404Component } from './paginas/err404/err404.component';

const rutas: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'inicio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', component: Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
