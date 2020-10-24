import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiplanModalPage } from './miplan-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MiplanModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiplanModalPageRoutingModule {}
