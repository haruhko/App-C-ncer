import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  
 
  datastorage: any;
  name: string;
  tel: string;
  doc: string;
  docnumber: string;
  epss: string;
  cuname: string;
  cutel: string;
  tipo: string;
  esta: string;
  diagdate: string;
  como: string;
  med: string;
  farm: string;
  hos: string;
  urg: string;

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.storage.get('storage_xxx').then((res) => {
      this.datastorage = res;
      this.name = this.datastorage.your_name;
      this.tel = this.datastorage.telefono;
      this.doc = this.datastorage.document;
      this.docnumber = this.datastorage.document_number;
      this.epss = this.datastorage.eps;
      this.cuname = this.datastorage.cuidador_name;
      this.cutel = this.datastorage.cuidador_telefono;
      this.tipo = this.datastorage.cancer_tipo;
      this.esta = this.datastorage.estadio;
      this.diagdate = this.datastorage.date_diagnostico;
      this.como = this.datastorage.comorbilidades;
      this.med = this.datastorage.medico_tratante;
      this.farm = this.datastorage.farmacia;
      this.hos = this.datastorage.hospital;
      this.urg = this.datastorage.urgencias;
    });
  }

}
