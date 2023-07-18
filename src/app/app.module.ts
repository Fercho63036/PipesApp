import { LOCALE_ID, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeEsBO from '@angular/common/locales/es-BO'
import localfrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEsBO );
registerLocaleData( localfrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-BO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
