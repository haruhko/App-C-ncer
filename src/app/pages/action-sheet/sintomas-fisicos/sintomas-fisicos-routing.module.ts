import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasFisicosPage } from './sintomas-fisicos.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasFisicosPage
  },
  {
    path: 'estadisticas1',
    loadChildren: () => import('./estadisticas1/estadisticas1.module').then( m => m.Estadisticas1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasFisicosPageRoutingModule {}
