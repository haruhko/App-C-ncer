import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecreacionPageRoutingModule } from './recreacion-routing.module';

import { RecreacionPage } from './recreacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecreacionPageRoutingModule
  ],
  declarations: [RecreacionPage]
})
export class RecreacionPageModule {}
