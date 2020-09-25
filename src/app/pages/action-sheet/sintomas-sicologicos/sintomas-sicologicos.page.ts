import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sintomas-sicologicos',
  templateUrl: './sintomas-sicologicos.page.html',
  styleUrls: ['./sintomas-sicologicos.page.scss'],
})
export class SintomasSicologicosPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
