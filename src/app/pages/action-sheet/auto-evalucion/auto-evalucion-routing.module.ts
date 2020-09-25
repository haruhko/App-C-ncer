import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoEvalucionPage } from './auto-evalucion.page';

const routes: Routes = [
  {
    path: '',
    component: AutoEvalucionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoEvalucionPageRoutingModule {}
