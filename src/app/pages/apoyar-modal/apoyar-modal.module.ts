import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApoyarModalPageRoutingModule } from './apoyar-modal-routing.module';

import { ApoyarModalPage } from './apoyar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApoyarModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ApoyarModalPage]
})
export class ApoyarModalPageModule {}
