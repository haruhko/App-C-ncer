import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnticiparModalPage } from './anticipar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AnticiparModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnticiparModalPageRoutingModule {}
