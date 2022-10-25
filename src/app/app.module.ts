import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { AppRouterModule } from './app-router.module';

//Cambiar el local de la app
import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule
  ],
  providers: [
    /*se define de forma global: cambia el idioma, la monena, números, formatos, etc */ 
    { provide: LOCALE_ID, useValue:'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
