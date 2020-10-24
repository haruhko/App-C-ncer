import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-efectos-secundarios',
  templateUrl: './efectos-secundarios.page.html',
  styleUrls: ['./efectos-secundarios.page.scss'],
})
export class EfectosSecundariosPage implements OnInit {

  efectossecundarios: any[];

  automaticClose = false;
  constructor(private menuCtrl: MenuController, private http: HttpClient) {
    this.http.get('assets/efectossecundarios.json'). subscribe(res => {
      this.efectossecundarios = res ['items'];

      this.efectossecundarios[0].open = true;
    });
   }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  toggleSection(index){
    this.efectossecundarios[index].open = !this.efectossecundarios[index].open;

    if(this.automaticClose && this.efectossecundarios[index].open){
      this.efectossecundarios
      .filter((item, itemIndex) => itemIndex != index )
      .map(item => item.open = false);
    }
  }
  toggleItem(index, childIndex){
    this.efectossecundarios[index].children[childIndex].open = !this.efectossecundarios[index].children[childIndex].open;

  }

}
