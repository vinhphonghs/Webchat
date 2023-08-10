import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChatBoxComponent} from './Pages/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
