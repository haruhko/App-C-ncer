import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPlanPageRoutingModule } from './mi-plan-routing.module';

import { MiPlanPage } from './mi-plan.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPlanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiPlanPage]
})
export class MiPlanPageModule {}
