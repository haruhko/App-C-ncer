import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, PopoverController, ToastController, NavController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';
import {componente} from '../../interfaces/interfaces';
import {AuthService} from '../../servicios/auth.service';
import { AccessProviders } from 'src/app/providers/access_providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  componentes: componente[]=[];
  datastorage: any;
  name: string;

  //users: any = [];
  //limit: number = 13; //limit get data
  //start: number = 0;

  constructor(
    private menuCtrl: MenuController,
    public authService: AuthService,
    private popoverCtrl: PopoverController,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private storage: Storage,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get('storage_xxx').then((res) => {
      console.log(res);
      this.datastorage = res;
      this.name = this.datastorage.your_name;
    });

    //this.start = 0;
    //this.users = [];
    //this.loadUsers();
  }

  //async loadUsers(){
    //return new Promise(resolve => {
      //let body = {
        //aski:'load_users',
        //start: this.start,
        //limit: this.limit
      //};
      //this.accsPrvds.postData(body, 'proses-api.php').subscribe((res:any) =>{
        //for(let datas of res.result){ //specail if you wnat to use ininiti scroll load data per limit
          //this.users.push(datas);

        //};
        //resolve(true);
      //});
    //});
  //}

  //async delData(){

  //}

  //loadData(){
   // this.start += this.limit;
    //setTimeout(() =>{
      //this.loadUsers.().then(() =>{
        //event.target.complete();
      //});
    //}, 500);
  //}


  //async doRefresh(event){
    //const loader = await this.loadingCtrl.create({
      //message: 'Please wait...',
    //});
    //loader.present();
    //this.ngOnInit();
    //event.target.complete();
    //loader.dismiss();
  //}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  Onlogout(){
    this.authService.logout();
  } 

  async presentPopover (ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/inicio']);
    const toast = await this.toastCtrl.create({
      message: 'Cierre de sesión exitoso.',
      duration: 1500
    });
    toast.present();
  }

 // openCrud(a){
   // this.router.navigate(['/action-sheet/mi-plan/' +a]);
  //}

}

