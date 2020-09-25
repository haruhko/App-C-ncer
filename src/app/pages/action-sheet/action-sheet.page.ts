import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {componente} from '../../interfaces/interfaces';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  componentes: componente[]=[];

  constructor(private menuCtrl: MenuController,
    public AuthService: AuthService) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  Onlogout(){
    this.AuthService.logout();
  } 

}

