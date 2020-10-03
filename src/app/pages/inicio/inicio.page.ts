import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router'; 
import { EmptyError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email:string;
  password:string;
  showPassword = false;
  
  

  


  constructor(private authService: AuthService, 
              public router: Router, 
              private http:  HttpClient) { }
  
 
  ngOnInit() {
  }
  togglePassword():void{
    this.showPassword = !this.showPassword;

    
  }
  
//datos={}
  //apiUrl='http://localhost/Unalapp/';

  OnSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
    this.router.navigate(['/action-sheet']);
   }).catch(err => alert('los datos son incorrectos'));

    //console.log(this.datos);
    //this.http.post(this.apiUrl, JSON.stringify(this.datos))
    //.subscribe(data=>{
     // console.log(data);
    //},
    //(err)=>{
      //console.log(err);
    //}
    //);
  }

  
}
