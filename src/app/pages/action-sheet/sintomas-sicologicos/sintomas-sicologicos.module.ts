import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasSicologicosPageRoutingModule } from './sintomas-sicologicos-routing.module';

import { SintomasSicologicosPage } from './sintomas-sicologicos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasSicologicosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SintomasSicologicosPage]
})
export class SintomasSicologicosPageModule {}
