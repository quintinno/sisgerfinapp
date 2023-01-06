import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaPage } from './receita.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaPage
  },  {
    path: 'receita-cadastrar',
    loadChildren: () => import('./receita-cadastrar/receita-cadastrar.module').then( m => m.ReceitaCadastrarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaPageRoutingModule {}
