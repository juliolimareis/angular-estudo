import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HorizonBarComponent } from './components/horizon-bar/horizon-bar.component';

@NgModule({
  declarations: [
    AppComponent,
		TopBarComponent,
		CardComponent,
    HorizonBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
