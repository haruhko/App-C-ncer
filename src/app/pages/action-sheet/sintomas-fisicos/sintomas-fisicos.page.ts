import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-sintomas-fisicos',
  templateUrl: './sintomas-fisicos.page.html',
  styleUrls: ['./sintomas-fisicos.page.scss'],
})
export class SintomasFisicosPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
