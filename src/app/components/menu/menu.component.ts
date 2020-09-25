import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/servicios/data.service';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<componente[]>;

  constructor(private dataService: DataService,
    public AuthService: AuthService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpt();
  }

  Onlogout(){
    this.AuthService.logout();
  }

}
