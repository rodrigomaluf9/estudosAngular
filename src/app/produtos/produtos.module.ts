import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutoService } from './produto.service';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProdutosComponent, ProdutoDetalheComponent],
  providers : [ProdutoService]
})
export class ProdutosModule { }
