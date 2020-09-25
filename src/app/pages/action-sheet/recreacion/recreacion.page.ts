import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recreacion',
  templateUrl: './recreacion.page.html',
  styleUrls: ['./recreacion.page.scss'],
})
export class RecreacionPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
