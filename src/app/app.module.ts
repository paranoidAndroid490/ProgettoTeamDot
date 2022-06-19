import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YachtsComponent } from './yachts/yachts.component';
import { OfferteComponent } from './offerte/offerte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModificaYachtComponent } from './modifica-yacht/modifica-yacht.component';
import { MaterialModule } from './material.modules';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
