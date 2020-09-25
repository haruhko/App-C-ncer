import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignosDeAlarmaPageRoutingModule } from './signos-de-alarma-routing.module';

import { SignosDeAlarmaPage } from './signos-de-alarma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignosDeAlarmaPageRoutingModule
  ],
  declarations: [SignosDeAlarmaPage]
})
export class SignosDeAlarmaPageModule {}
