import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from 'src/app/modules/login/login.component';



@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FullwidthModule { }
