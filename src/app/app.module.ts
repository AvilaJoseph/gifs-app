import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    SidebarComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
