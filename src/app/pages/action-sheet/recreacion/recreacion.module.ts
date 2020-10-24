import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecreacionPageRoutingModule } from './recreacion-routing.module';

import { RecreacionPage } from './recreacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecreacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecreacionPage]
})
export class RecreacionPageModule {}
