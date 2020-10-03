import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasSicologicosPage } from './sintomas-sicologicos.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasSicologicosPage
  },
  {
    path: 'estadisticas2',
    loadChildren: () => import('./estadisticas2/estadisticas2.module').then( m => m.Estadisticas2PageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasSicologicosPageRoutingModule {}
