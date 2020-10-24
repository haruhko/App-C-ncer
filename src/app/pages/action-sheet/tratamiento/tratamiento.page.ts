import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CalModalPage } from '../../cal-modal/cal-modal.page';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.page.html',
  styleUrls: ['./tratamiento.page.scss'],
})
export class TratamientoPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  async openModal() { 
    const modal = this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

}
