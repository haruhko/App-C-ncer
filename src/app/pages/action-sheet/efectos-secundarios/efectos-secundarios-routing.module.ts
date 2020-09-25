import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfectosSecundariosPage } from './efectos-secundarios.page';

const routes: Routes = [
  {
    path: '',
    component: EfectosSecundariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfectosSecundariosPageRoutingModule {}
