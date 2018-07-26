import { TestBed, inject } from '@angular/core/testing';

import { ProdutoService } from './produto.service';

describe('ProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosService]
    });
  });

  it('should be created', inject([ProdutoService], (service: ProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
