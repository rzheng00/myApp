import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutableHeroDetailComponent } from './routable-hero-detail/routable-hero-detail.component';
import { HttpClientHeroDetailComponent } from './http-client-hero-detail/http-client-hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: RoutableHeroDetailComponent},
  {path: 'details/:id', component: HttpClientHeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
