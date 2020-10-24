import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoregularModalPage } from './autoregular-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AutoregularModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoregularModalPageRoutingModule {}
