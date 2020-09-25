import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfectosSecundariosPageRoutingModule } from './efectos-secundarios-routing.module';

import { EfectosSecundariosPage } from './efectos-secundarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfectosSecundariosPageRoutingModule
  ],
  declarations: [EfectosSecundariosPage]
})
export class EfectosSecundariosPageModule {}
