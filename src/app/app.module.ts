import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la application
import localeES from '@angular/common/locales/es-NI';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeES );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ], 
  providers: [
    { provide: LOCALE_ID, useValue:'es-NI' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
