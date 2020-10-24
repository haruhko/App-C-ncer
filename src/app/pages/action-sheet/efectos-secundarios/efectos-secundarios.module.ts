import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfectosSecundariosPageRoutingModule } from './efectos-secundarios-routing.module';

import { EfectosSecundariosPage } from './efectos-secundarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfectosSecundariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EfectosSecundariosPage]
})
export class EfectosSecundariosPageModule {}
