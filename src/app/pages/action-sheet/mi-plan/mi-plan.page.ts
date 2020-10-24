import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import {MiplanModalPage} from '../../miplan-modal/miplan-modal.page';

@Component({
  selector: 'app-mi-plan',
  templateUrl: './mi-plan.page.html',
  styleUrls: ['./mi-plan.page.scss'],
})
export class MiPlanPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  Add(){
    
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  async openModal() { 
    const modal = this.modalCtrl.create({
      component: MiplanModalPage,
      cssClass: 'miplan-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

}
