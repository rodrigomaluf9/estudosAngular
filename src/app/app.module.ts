import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ServicosModule } from './servicos/servicos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeaderModule, LoginModule, ProdutosModule, ServicosModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
