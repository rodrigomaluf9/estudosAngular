import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeaderModule, LoginModule, routing
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
