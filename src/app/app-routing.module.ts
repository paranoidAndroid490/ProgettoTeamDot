import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModificaYachtComponent } from './modifica-yacht/modifica-yacht.component';
import { OfferteComponent } from './offerte/offerte.component';
import { EditComponent } from './yacht/edit/edit.component';
import { YachtComponent } from './yacht/yacht.component';
import { YachtsComponent } from './yachts/yachts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'yachts', component: YachtsComponent},
  {path: 'modifica', component: ModificaYachtComponent, children:[
    {path: 'yacht/:id', component: YachtComponent, children:[
      {path: ':edit/:id',component:EditComponent}
    ]},

  ]},
  {path: 'offerte', component: OfferteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
