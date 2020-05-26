import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
