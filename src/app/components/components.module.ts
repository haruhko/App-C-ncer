import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from './header/header.component';
import { IonicModule} from '@ionic/angular';
import {MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';
import { SintomasfisComponent } from './sintomasfis/sintomasfis.component';
import { SintomassicoComponent } from './sintomassico/sintomassico.component';
import { EfectosComponent } from './efectos/efectos.component';
import { HeaderlogoComponent } from './headerlogo/headerlogo.component';
import { AprenderComponent } from './aprender/aprender.component';






@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PopoverInfoComponent,
    SintomasfisComponent,
    SintomassicoComponent,
    EfectosComponent,
    HeaderlogoComponent,
    AprenderComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PopoverInfoComponent,
    SintomasfisComponent,
    SintomassicoComponent,
    EfectosComponent,
    HeaderlogoComponent,
    AprenderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    
  ]
})
export class ComponentsModule { }
