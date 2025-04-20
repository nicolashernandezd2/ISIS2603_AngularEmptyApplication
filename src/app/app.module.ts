import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }     from './app.component';
import { SeriesModule }     from './series/series.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,      // necesario para HttpClient
    SeriesModule           // tu módulo de series
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }