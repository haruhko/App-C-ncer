import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprenderModalPage } from './aprender-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AprenderModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprenderModalPageRoutingModule {}
