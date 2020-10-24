import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoDeAnimoPageRoutingModule } from './estado-de-animo-routing.module';

import { EstadoDeAnimoPage } from './estado-de-animo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoDeAnimoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstadoDeAnimoPage]
})
export class EstadoDeAnimoPageModule {}
