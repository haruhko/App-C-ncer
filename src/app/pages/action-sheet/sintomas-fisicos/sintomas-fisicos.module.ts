import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasFisicosPageRoutingModule } from './sintomas-fisicos-routing.module';

import { SintomasFisicosPage } from './sintomas-fisicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasFisicosPageRoutingModule
  ],
  declarations: [SintomasFisicosPage]
})
export class SintomasFisicosPageModule {}
