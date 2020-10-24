import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmonizarModalPage } from './armonizar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArmonizarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmonizarModalPageRoutingModule {}
