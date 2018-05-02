import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from './http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonApiModule
  ],
  providers: [Datastore],
  bootstrap: [AppComponent]
})
export class AppModule { }
