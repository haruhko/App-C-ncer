import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signos-de-alarma',
  templateUrl: './signos-de-alarma.page.html',
  styleUrls: ['./signos-de-alarma.page.scss'],
})
export class SignosDeAlarmaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
