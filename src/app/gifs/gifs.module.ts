import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './services/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
      
  ],
  imports: [
    CommonModule,
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
    
  ]
})
export class GifsModule { }
