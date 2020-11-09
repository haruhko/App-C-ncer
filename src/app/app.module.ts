import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule} from './components/components.module';

import {firebaseConfig} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { AccessProviders } from './providers/access_providers';


import {Camera} from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule, BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     ComponentsModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     HttpClientModule,
     IonicStorageModule.forRoot()
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AccessProviders,
    Camera,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
