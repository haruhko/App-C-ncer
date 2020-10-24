import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoEvalucionPageRoutingModule } from './auto-evalucion-routing.module';

import { AutoEvalucionPage } from './auto-evalucion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoEvalucionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutoEvalucionPage]
})
export class AutoEvalucionPageModule {}
