import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoEvalucionPageRoutingModule } from './auto-evalucion-routing.module';

import { AutoEvalucionPage } from './auto-evalucion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoEvalucionPageRoutingModule
  ],
  declarations: [AutoEvalucionPage]
})
export class AutoEvalucionPageModule {}
