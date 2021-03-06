import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-armonizar-modal',
  templateUrl: './armonizar-modal.page.html',
  styleUrls: ['./armonizar-modal.page.scss'],
})
export class ArmonizarModalPage implements OnInit {

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

}
