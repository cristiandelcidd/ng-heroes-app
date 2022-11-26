import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import {
  AddComponent,
  HeroComponent,
  HomeComponent,
  ListComponent,
  SearchComponent,
} from './pages';

@NgModule({
  imports: [CommonModule, HeroesRoutingModule],
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
  ],
})
export class HeroesModule {}
