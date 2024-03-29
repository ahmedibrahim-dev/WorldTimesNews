import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EgyptnewsComponent } from './egyptnews/egyptnews.component';

import { BitcoinnewsComponent } from './bitcoinnews/bitcoinnews.component';
import { GlobalnewsComponent } from './globalnews/globalnews.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EgyptnewsComponent,
    BitcoinnewsComponent,
    GlobalnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
