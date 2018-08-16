import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TyleComponent } from './tyle/tyle.component';
import { DeatComponent } from './deat/deat.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TyleComponent,
    DeatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
