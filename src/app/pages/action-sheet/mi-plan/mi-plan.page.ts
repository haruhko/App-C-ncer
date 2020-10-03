import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mi-plan',
  templateUrl: './mi-plan.page.html',
  styleUrls: ['./mi-plan.page.scss'],
})
export class MiPlanPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  Add(){
    
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
