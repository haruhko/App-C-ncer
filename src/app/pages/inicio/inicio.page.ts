import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router'; 
import { EmptyError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string;
  password:string;
  showPassword = false;
  
  

  


  constructor(private authService: AuthService, 
              public router: Router, 
              private http:  HttpClient,
              private alertCtrl: AlertController,
              public actionSheetController: ActionSheetController) { }
  
 
  ngOnInit() {
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
  
//datos={}
  //apiUrl='http://localhost/Unalapp/';

  OnSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
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

  
}
