import { RecreacionPage } from './../action-sheet/recreacion/recreacion.page';
import { HabitosPage } from './../action-sheet/habitos/habitos.page';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoregular-modal',
  templateUrl: './autoregular-modal.page.html',
  styleUrls: ['./autoregular-modal.page.scss'],
})
export class AutoregularModalPage implements OnInit {

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
async openModal1() { 
  const modal = this.modalCtrl.create({
    component: HabitosPage,
    cssClass: 'habitos',
    backdropDismiss: false
  });
  await (await modal).present();
}
async openModal2() { 
  const modal = this.modalCtrl.create({
    component: RecreacionPage,
    cssClass: 'recreacion',
    backdropDismiss: false
  });
  await (await modal).present();
}
}
