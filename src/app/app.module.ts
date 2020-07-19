import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TwowaybexamComponent } from './twowaybexam/twowaybexam.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TwowaybexamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
