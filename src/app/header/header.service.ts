import { Injectable } from '@angular/core';
import { Menu } from '../shared/menu';

@Injectable({ 
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getMenus(){
    let login = new Menu("login", "Login");
    let produtos = new Menu("produtos", "Produtos");
    let servicos = new Menu("servicos", "Serviços");
    return [ login, produtos, servicos];
  }
}
