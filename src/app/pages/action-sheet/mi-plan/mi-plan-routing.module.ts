import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiPlanPage } from './mi-plan.page';

const routes: Routes = [
  {
    path: '',
    component: MiPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiPlanPageRoutingModule {}
