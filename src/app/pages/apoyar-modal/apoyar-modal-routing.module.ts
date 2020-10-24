import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApoyarModalPage } from './apoyar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ApoyarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApoyarModalPageRoutingModule {}
