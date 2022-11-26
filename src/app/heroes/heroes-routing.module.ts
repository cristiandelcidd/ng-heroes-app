import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AddComponent,
  HeroComponent,
  HomeComponent,
  ListComponent,
  SearchComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'search', component: SearchComponent },
      { path: ':id', component: HeroComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class HeroesRoutingModule {}
