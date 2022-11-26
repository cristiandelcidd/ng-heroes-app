import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent, RegisterComponent } from './pages';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
