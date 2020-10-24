import { HttpClient } from '@angular/common/http';
import { ModalController, MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-aprender-modal',
  templateUrl: './aprender-modal.page.html',
  styleUrls: ['./aprender-modal.page.scss'],
})
export class AprenderModalPage implements OnInit {

  aprendermodal: any[];

  automaticClose = false;
  // tslint:disable-next-line: max-line-length
  constructor(private menuCtrl: MenuController, private http: HttpClient, private modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.http.get('assets/aprendermodal.json'). subscribe(res => {
      this.aprendermodal = res ['items'];

      this.aprendermodal[0].open = true;
    });
   }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  toggleSection(index){
    this.aprendermodal[index].open = !this.aprendermodal[index].open;

    if(this.automaticClose && this.aprendermodal[index].open){
      this.aprendermodal
      .filter((item, itemIndex) => itemIndex != index )
      .map(item => item.open = false);
    }
  }
  toggleItem(index, childIndex){
    this.aprendermodal[index].children[childIndex].open = !this.aprendermodal[index].children[childIndex].open;

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

