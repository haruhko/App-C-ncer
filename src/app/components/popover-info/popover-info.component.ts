import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController, ToastController } from '@ionic/angular';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  constructor(
    public AuthService: AuthService,
    private popoverCtrl: PopoverController,
    private storage: Storage,
    private navCtrl: NavController,
    private toastCtrl: ToastController) { }

  ngOnInit() {}
  
  Onlogout(){
    this.AuthService.logout();
    this.popoverCtrl.dismiss();
  } 
  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/inicio']);
    const toast = await this.toastCtrl.create({
      message: 'Cierre de sesión exitoso.',
      duration: 1100
    });
    toast.present();
    this.popoverCtrl.dismiss();
  }
  onClick(){
    this.popoverCtrl.dismiss();
  }

}
