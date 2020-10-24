import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sintomassico',
  templateUrl: './sintomassico.component.html',
  styleUrls: ['./sintomassico.component.scss'],
})
export class SintomassicoComponent implements OnInit {

  @Input('sintomassico') sintomassico: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async save(){
    const toast = await this.toastCtrl.create({
      message: 'Se ha guardado exitosamente.',
      duration: 1500
    });
    toast.present(); }

}
