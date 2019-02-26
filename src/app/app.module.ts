import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [NgxAuthFirebaseUIModule.forRoot({
    apiKey: "AIzaSyB5mwQFU5ujrPP9JcVKxda1VYaxhgSQHA0",
    authDomain: "taybookapp.firebaseapp.com",
    databaseURL: "https://taybookapp.firebaseio.com",
    projectId: "taybookapp",
    storageBucket: "taybookapp.appspot.com",
    messagingSenderId: "540084817358"
}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
