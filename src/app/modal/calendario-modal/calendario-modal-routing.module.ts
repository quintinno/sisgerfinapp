import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioModalPage } from './calendario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioModalPageRoutingModule {}
