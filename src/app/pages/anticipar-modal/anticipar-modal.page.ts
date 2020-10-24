import { SignosDeAlarmaPage } from './../action-sheet/signos-de-alarma/signos-de-alarma.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anticipar-modal',
  templateUrl: './anticipar-modal.page.html',
  styleUrls: ['./anticipar-modal.page.scss'],
})
export class AnticiparModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async close() {
    const alert = await this.alertCtrl.create({
      cssClass: 'components-alerts',
      mode:'ios',
      backdropDismiss:false,
      header: 'App Cáncer UN',
      subHeader: 'Has culminado el componente',
      message: '¡<strong> Felicitaciones </strong>!',
      buttons: ['OK']
    });
    await alert.present();
    this.modalCtrl.dismiss();
}
async openModal() { 
  const modal = this.modalCtrl.create({
    component: SignosDeAlarmaPage,
    cssClass: 'signos-de-alarma',
    backdropDismiss: false
  });
  await (await modal).present();
}
}
