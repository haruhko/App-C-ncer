import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router'; 
import { EmptyError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Button } from 'protractor';
import { Storage } from '@ionic/storage';
import { AccessProviders } from 'src/app/providers/access_providers';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string;
  showPassword = false;
  
  email_address: string = '';
  password: string = '';
  disabledButton;
 
  
//MODIFICAR LOS GUARDS PARA QUE PUEDAN LOGUEAR CORRECTAMENTE

  constructor(private authService: AuthService, 
              public router: Router, 
              private http:  HttpClient,
              private alertCtrl: AlertController,
              public actionSheetController: ActionSheetController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              public navCtrl: NavController,
              private accsPrvds: AccessProviders,
              private storage: Storage) { }
  
 
  ngOnInit() {
  }

  ionViewOldEnter(){
    this.disabledButton = false;
  }
 
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Iniciar Sesión',
      cssClass: 'my-custom-class',
      mode:'md',
      backdropDismiss:false,
      buttons: [{
        text: 'Conectarme con Facebook',
        cssClass:'azul',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
        }
      }, {
        text: 'Conectarme con Google',
        icon: 'logo-google',
        cssClass:'verde',
        handler: () => {
          console.log('Google clicked');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;

    
  }

  OnSubmitLogin()
  {
    this.authService.login(this.email_address, this.password).then( res =>{
    this.router.navigate(['/action-sheet']);
   }).catch(err => alert('los datos son incorrectos'));
    //console.log(this.datos);
    //this.http.post(this.apiUrl, JSON.stringify(this.datos))
    //.subscribe(data=>{
     // console.log(data);
    //},
    //(err)=>{
      //console.log(err);
    //}
    //);
  }

  async tryLogin(){
    if (this.email_address == '') {
      this.presentToast('Correo eléctronico requerido');
    }else if (this.password == '') {
      this.presentToast('Contraseña requerida');
    }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Cargando......',
      });
      loader.present();
      return new Promise(resolve => {
        let body = {
          aksi: 'proses_login',
          email_address: this.email_address,
          password: this.password
        }
        this.accsPrvds.postData(body, 'proses-api.php').subscribe((res: any) => {
          if(res.success==true){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Inicio de sesión exitoso.');
            this.storage.set('storage_xxx', res.result); // create storage session
            this.navCtrl.navigateRoot(['/action-sheet']);
          }else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('El correo o contraseña errado.');
          }
        },(err)=>{
          loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Timeot');
        });
      });
    }
  }

  async presentToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

  
}
