import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiplanModalPageRoutingModule } from './miplan-modal-routing.module';

import { MiplanModalPage } from './miplan-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiplanModalPageRoutingModule
  ],
  declarations: [MiplanModalPage]
})
export class MiplanModalPageModule {}
