import { SignosDeAlarmaPage } from './../signos-de-alarma/signos-de-alarma.page';
import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, ModalController } from '@ionic/angular';
import { AprenderModalPage } from '../../aprender-modal/aprender-modal.page';
import { AnticiparModalPage } from '../../anticipar-modal/anticipar-modal.page';
import { AutoregularModalPage } from '../../autoregular-modal/autoregular-modal.page';
import { ArmonizarModalPage } from '../../armonizar-modal/armonizar-modal.page';
import { ApoyarModalPage } from '../../apoyar-modal/apoyar-modal.page';

@Component({
  selector: 'app-autocuidado',
  templateUrl: './autocuidado.page.html',
  styleUrls: ['./autocuidado.page.scss'],
})
export class AutocuidadoPage implements OnInit {
 
  rangeVal: string;
  rangeVal2: string;

  constructor(private menuCtrl: MenuController, public platform: Platform, private modalCtrl: ModalController ) {
    this.platform.ready().then(() => {
      this.rangeVal = '0';
      this.rangeVal2 = '0';
    });
   }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async openModal1() { 
    const modal = this.modalCtrl.create({
      component: AprenderModalPage,
      cssClass: 'aprender-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

  async openModal2() { 
    const modal = this.modalCtrl.create({
      component: AnticiparModalPage,
      cssClass: 'anticipar-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

  async openModal3() { 
    const modal = this.modalCtrl.create({
      component: AutoregularModalPage,
      cssClass: 'autoregular-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

  async openModal4() { 
    const modal = this.modalCtrl.create({
      component: ArmonizarModalPage,
      cssClass: 'armonizar-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

  async openModal5() { 
    const modal = this.modalCtrl.create({
      component: ApoyarModalPage,
      cssClass: 'apoyar-modal',
      backdropDismiss: false
    });
    await (await modal).present();
  }

  /*close() {
    this.modalCtrl.dismiss();
  }*/
}
