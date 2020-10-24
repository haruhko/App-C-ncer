import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprenderModalPageRoutingModule } from './aprender-modal-routing.module';

import { AprenderModalPage } from './aprender-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprenderModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AprenderModalPage]
})
export class AprenderModalPageModule {}
