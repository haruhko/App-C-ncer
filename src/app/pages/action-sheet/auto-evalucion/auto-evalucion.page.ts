import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-auto-evalucion',
  templateUrl: './auto-evalucion.page.html',
  styleUrls: ['./auto-evalucion.page.scss'],
})
export class AutoEvalucionPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  

}
