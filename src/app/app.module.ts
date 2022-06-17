import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YachtsComponent } from './yachts/yachts.component';
import { OfferteComponent } from './offerte/offerte.component';
import { ModificaYachtComponent } from './modifica-yacht/modifica-yacht.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YachtsComponent,
    OfferteComponent,
    ModificaYachtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
