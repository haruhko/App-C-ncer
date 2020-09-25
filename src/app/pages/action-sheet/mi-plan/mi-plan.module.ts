import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPlanPageRoutingModule } from './mi-plan-routing.module';

import { MiPlanPage } from './mi-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPlanPageRoutingModule
  ],
  declarations: [MiPlanPage]
})
export class MiPlanPageModule {}
