import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasSicologicosPageRoutingModule } from './sintomas-sicologicos-routing.module';

import { SintomasSicologicosPage } from './sintomas-sicologicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasSicologicosPageRoutingModule
  ],
  declarations: [SintomasSicologicosPage]
})
export class SintomasSicologicosPageModule {}
