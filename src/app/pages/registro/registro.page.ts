import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access_providers';
import {AuthService} from '../../servicios/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  your_name: string = '';
  gender: string = '';
  date_birth: string = '';
  email_address: string = '';
  password: string = '';
  confirm_pass: string = '';
  telefono: string = '';
  document: string = '';
  document_number: string = '';
  eps: string = '';
  departamento: string = '';
  municipio: string = '';
  cuidador_name: string = '';
  cuidador_telefono: string = '';
  cancer_tipo: string = '';
  estadio: string = '';
  date_diagnostico: string = '';
  comorbilidades: string = '';
  medico_tratante: string = '';
  farmacia: string = '';
  hospital: string = '';
  urgencias: string = '';
  imagen_perfil: string = '';
  disabledButton;
    
  constructor(
    public authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private camera: Camera,
    private webView: WebView) { }

  ngOnInit() {
  }

  ionViewOldEnter(){
    this.disabledButton = false;
  }
  
  Onlogout(){
    this.authService.logout();
  }

  async tryRegister(){
     if (this.your_name == '') {
       this.presentToast('Nombre requerido');
     }else if (this.gender == '') {
       this.presentToast('Sexo requerido');
     }else if (this.date_birth == '') {
       this.presentToast('Fecha de nacimiento requerida');
     }else if (this.email_address == '') {
       this.presentToast('Correo electrónico requerido');
     }else if (this.telefono == '') {
       this.presentToast('Numero de celular requerido');
     }else if (this.document == '') {
       this.presentToast('Tipo de documento requerido');
     }
     else if (this.document_number == '') {
       this.presentToast('Numero de documento requerido');
     }
     else if (this.eps == '') {
      this.presentToast('EPS requerida');
     }
    else if (this.departamento == '') {
      this.presentToast('Departamento requerido');
     }
     else if (this.municipio == '') {
       this.presentToast('Municipio requerido');
     }
     else if (this.estadio == '') {
       this.presentToast('Estadio de cáncer requerido');
     }
     else if (this.date_diagnostico == '') {
       this.presentToast('Fecha de diagnóstico requerida');
     }
     else if (this.comorbilidades == '') {
       this.presentToast('Comorbilidades requerido');
     }
      else if (this.password == '') {
       this.presentToast('Contraseña requerida');
     }else if (this.confirm_pass != this.password) {
       this.presentToast('Las contraseñas no coinciden');
     }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Cargando...',
      });
      loader.present();
      return new Promise(resolve => {
        let body = {
          aksi: 'proses_register',
          name: this.your_name,
          genero: this.gender,
          nacimiento: this.date_birth,
          email: this.email_address,
          password: this.password,
          password_confirmation: this.confirm_pass,
          telefono: this.telefono,
          document: this.document,
          document_number: this.document_number,
          eps: this.eps,
          departamento: this.departamento,
          municipio: this.municipio,
          cuidador_name: this.cuidador_name,
          cuidador_telefono: this.cuidador_telefono,
          cancer_tipo: this.cancer_tipo,
          estadio: this.estadio,
          date_diagnostico: this.date_diagnostico,
          comorbilidades: this.comorbilidades,
          medico_tratante: this.medico_tratante,
          farmacia: this.farmacia,
          hospital: this.hospital,
          urgencias: this.urgencias,
          imagen_perfil: this.imagen_perfil
 
        }
        this.accsPrvds.postData(body, 'register').subscribe((res: any) => {
          if(res.success==true){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/inicio']);
          }else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
          }
        },(err)=>{
          loader.dismiss();
            this.disabledButton = false;
            this.presentAlert('Timeot');
        });
      });
     }
  }

  async presentToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: msg,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // action
          }
        }, {
          text: 'Try again',
          handler: () => {
            this.tryRegister();
          }
        }
      ]
    });
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.imagen_perfil = this.webView.convertFileSrc(imageData);
    }, (err) => {
      console.log(err);
    });
  }

  uploadPicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.imagen_perfil = this.webView.convertFileSrc(imageData);
    }, (err) => {
      console.log(err);
    });
  }

}

