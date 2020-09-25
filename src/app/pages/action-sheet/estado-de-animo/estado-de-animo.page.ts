import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-estado-de-animo',
  templateUrl: './estado-de-animo.page.html',
  styleUrls: ['./estado-de-animo.page.scss'],
})
export class EstadoDeAnimoPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
