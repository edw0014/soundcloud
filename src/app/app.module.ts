import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

import { AppComponent } from './app.component';
import { HorizontalCard } from './card/horizontal.card.component';
import { Carousel } from './carousel/carousel.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HorizontalCard,
    Carousel
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
