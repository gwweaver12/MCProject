import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextMirrorComponent } from './text-mirror/text-mirror.component';
import {FormsModule} from "@angular/forms";
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextMirrorComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
