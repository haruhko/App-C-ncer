import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmonizarModalPageRoutingModule } from './armonizar-modal-routing.module';

import { ArmonizarModalPage } from './armonizar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmonizarModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArmonizarModalPage]
})
export class ArmonizarModalPageModule {}
