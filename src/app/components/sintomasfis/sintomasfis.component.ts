import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sintomasfis',
  templateUrl: './sintomasfis.component.html',
  styleUrls: ['./sintomasfis.component.scss'],
})
export class SintomasfisComponent implements OnInit {


  @Input('sintomasfis') sintomasfis: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async save(){
    const toast = await this.toastCtrl.create({
      message: 'Se ha guardado exitosamente.',
      duration: 1500
    });
    toast.present(); }

}
