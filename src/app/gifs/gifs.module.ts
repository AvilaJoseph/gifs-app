import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './services/home/home.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
