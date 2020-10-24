import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sintomas-sicologicos',
  templateUrl: './sintomas-sicologicos.page.html',
  styleUrls: ['./sintomas-sicologicos.page.scss'],
})
export class SintomasSicologicosPage implements OnInit {
  infopsicologica: any[];
  automaticClose = false;

  constructor(private menuCtrl: MenuController, public navCtrl: NavController, private http: HttpClient) { 
    this.http.get('assets/infopsicologica.json'). subscribe(res => {
      this.infopsicologica = res ['items'];

      this.infopsicologica[0].open = true;
    });
  }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

  toggleSection(index){
    this.infopsicologica[index].open = !this.infopsicologica[index].open;

    if(this.automaticClose && this.infopsicologica[index].open){
      this.infopsicologica
      .filter((item, itemIndex) => itemIndex != index )
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex){
    this.infopsicologica[index].children[childIndex].open = !this.infopsicologica[index].children[childIndex].open;

  }
}
 
