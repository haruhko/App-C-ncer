import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-autocuidado',
  templateUrl: './autocuidado.page.html',
  styleUrls: ['./autocuidado.page.scss'],
})
export class AutocuidadoPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
