import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasFisicosPage } from './sintomas-fisicos.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasFisicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasFisicosPageRoutingModule {}
