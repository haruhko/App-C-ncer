import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  constructor(public AuthService: AuthService,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {}
  
  Onlogout(){
    this.AuthService.logout();
    this.popoverCtrl.dismiss();
  } 

  onClick(){
    this.popoverCtrl.dismiss();
  }

}
