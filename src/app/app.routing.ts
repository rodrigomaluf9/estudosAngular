import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'produto/:id', component: ProdutoDetalheComponent },
    { path: 'servicos', component: ServicosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
