import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import {Router} from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
    private router: Router) { }

  login(email1:string, password:string){

    return new Promise((resolve, rejected)=> {
      this.AFauth.signInWithEmailAndPassword(email1, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    })

    
  }
  logout(){
    this.AFauth.signOut().then(()=>{
      this.router.navigate(['/inicio']);
    })
  }
}
