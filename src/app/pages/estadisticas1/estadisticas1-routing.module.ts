import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estadisticas1Page } from './estadisticas1.page';

const routes: Routes = [
  {
    path: '',
    component: Estadisticas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estadisticas1PageRoutingModule {}
