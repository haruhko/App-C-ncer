import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signos-de-alarma',
  templateUrl: './signos-de-alarma.page.html',
  styleUrls: ['./signos-de-alarma.page.scss'],
})
export class SignosDeAlarmaPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
