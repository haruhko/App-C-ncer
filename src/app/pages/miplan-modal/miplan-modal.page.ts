import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miplan-modal',
  templateUrl: './miplan-modal.page.html',
  styleUrls: ['./miplan-modal.page.scss'],
})
export class MiplanModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
