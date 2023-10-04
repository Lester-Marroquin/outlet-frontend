import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ //TODO: Declaraciones, Componentes, Directivas, Pipes
  declarations: [
    AppComponent,
  ],
  imports: [ //TODO: Solo se importan otros Modulos
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
