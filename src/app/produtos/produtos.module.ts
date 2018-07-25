import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProdutosComponent],
  providers : [ProdutosService]
})
export class ProdutosModule { }
