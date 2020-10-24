import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasSicologicosPage } from './sintomas-sicologicos.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasSicologicosPage
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasSicologicosPageRoutingModule {}
