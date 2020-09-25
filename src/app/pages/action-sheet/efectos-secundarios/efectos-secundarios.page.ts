import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-efectos-secundarios',
  templateUrl: './efectos-secundarios.page.html',
  styleUrls: ['./efectos-secundarios.page.scss'],
})
export class EfectosSecundariosPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
