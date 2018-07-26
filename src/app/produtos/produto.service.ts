import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(){
    let produto1 = new Produto("01", "Produto 01");
    let produto2 = new Produto("02", "Produto 02");
    let produto3 = new Produto("03", "Produto 03");
    return [ produto1, produto2, produto3];
  }
}
