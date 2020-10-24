import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';
import {componente} from '../../interfaces/interfaces';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  componentes: componente[]=[];

  constructor(private menuCtrl: MenuController,
    public AuthService: AuthService,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  Onlogout(){
    this.AuthService.logout();
  } 

  async presentPopover (ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}

