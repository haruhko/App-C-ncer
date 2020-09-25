import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
    
    


  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }
  
  Onlogout(){
    this.AuthService.logout();
  }

}
