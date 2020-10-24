import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoPageRoutingModule } from './tratamiento-routing.module';

import { TratamientoPage } from './tratamiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratamientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TratamientoPage]
})
export class TratamientoPageModule {}
