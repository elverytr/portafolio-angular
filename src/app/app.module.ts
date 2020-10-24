import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { CabeceraComponent } from './compartido/cabecera/cabecera.component';
import { PieDePaginaComponent } from './compartido/pie-de-pagina/pie-de-pagina.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import { Err404Component } from './paginas/err404/err404.component';
import { LoaderComponent } from './plugins/loader/loader.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    Err404Component,
    LoaderComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }