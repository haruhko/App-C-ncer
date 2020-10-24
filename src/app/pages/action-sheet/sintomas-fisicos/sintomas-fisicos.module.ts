import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasFisicosPageRoutingModule } from './sintomas-fisicos-routing.module';

import { SintomasFisicosPage } from './sintomas-fisicos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasFisicosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SintomasFisicosPage]
})
export class SintomasFisicosPageModule {}
