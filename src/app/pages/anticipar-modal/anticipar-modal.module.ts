import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnticiparModalPageRoutingModule } from './anticipar-modal-routing.module';

import { AnticiparModalPage } from './anticipar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnticiparModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnticiparModalPage]
})
export class AnticiparModalPageModule {}
