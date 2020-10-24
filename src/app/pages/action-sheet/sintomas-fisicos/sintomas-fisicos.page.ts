import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-sintomas-fisicos',
  templateUrl: './sintomas-fisicos.page.html',
  styleUrls: ['./sintomas-fisicos.page.scss'],
})
export class SintomasFisicosPage implements OnInit {

  information: any[];

  automaticClose = false;
  constructor(private menuCtrl: MenuController, private http: HttpClient) {
    this.http.get('assets/information.json'). subscribe(res => {
      this.information = res ['items'];

      this.information[0].open = true;
    });
   }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  toggleSection(index){
    this.information[index].open = !this.information[index].open;

    if(this.automaticClose && this.information[index].open){
      this.information
      .filter((item, itemIndex) => itemIndex != index )
      .map(item => item.open = false);
    }
  }
  toggleItem(index, childIndex){
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;

  }


}
