import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getMenus(){

    return ['Produtos','Serviços'];
  }
}
