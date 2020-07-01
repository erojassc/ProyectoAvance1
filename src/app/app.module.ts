import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { FormularioComponent } from './component1/formulario/formulario.component';
import { ListaComponent } from './component1/lista/lista.component';
import { ItemComponent } from './component1/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    FormularioComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
