import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estadisticas1PageRoutingModule } from './estadisticas1-routing.module';

import { Estadisticas1Page } from './estadisticas1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estadisticas1PageRoutingModule
  ],
  declarations: [Estadisticas1Page]
})
export class Estadisticas1PageModule {}
