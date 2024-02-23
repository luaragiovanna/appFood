import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItensPage } from './itens.page';

const routes: Routes = [
  {
    path: '',
    component: ItensPage
  },
  {
    path: 'cart', //nv dif ../
    loadChildren: () => import('./../cart/cart.module').then( m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensPageRoutingModule {}
