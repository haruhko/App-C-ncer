import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router'; 
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string;
  password:string;

  


  constructor(private authService: AuthService, public router: Router) { }
  
 
  ngOnInit() {
  }

  OnSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/action-sheet']);
    }).catch(err => alert('los datos son incorrectos'))
  }

  
}
