import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.page.html',
  styleUrls: ['./tratamiento.page.scss'],
})
export class TratamientoPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
