import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../../cal-modal/cal-modal.module';

import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/es';
import { ComponentsModule } from 'src/app/components/components.module';
registerLocaleData(localeDe);

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule,
    ComponentsModule
   
  ],
  declarations: [CalendarioPage],

  providers:[
    { provide : LOCALE_ID, useValue: 'es-DE'}

  ]
})
export class CalendarioPageModule {}
