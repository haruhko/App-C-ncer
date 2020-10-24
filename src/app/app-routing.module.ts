import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NologinGuard} from './guards/nologin.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'estadisticas2',
    loadChildren: () => import('./pages/estadisticas2/estadisticas2.module').then( m => m.Estadisticas2PageModule)
  },
  {
    path: 'estadisticas1',
    loadChildren: () => import('./pages/estadisticas1/estadisticas1.module').then( m => m.Estadisticas1PageModule)
  },
  {
    path: 'miplan-modal',
    loadChildren: () => import('./pages/miplan-modal/miplan-modal.module').then( m => m.MiplanModalPageModule)
  },
  {
    path: 'aprender-modal',
    loadChildren: () => import('./pages/aprender-modal/aprender-modal.module').then( m => m.AprenderModalPageModule)
  },
  {
    path: 'anticipar-modal',
    loadChildren: () => import('./pages/anticipar-modal/anticipar-modal.module').then( m => m.AnticiparModalPageModule)
  },
  {
    path: 'autoregular-modal',
    loadChildren: () => import('./pages/autoregular-modal/autoregular-modal.module').then( m => m.AutoregularModalPageModule)
  },
  {
    path: 'armonizar-modal',
    loadChildren: () => import('./pages/armonizar-modal/armonizar-modal.module').then( m => m.ArmonizarModalPageModule)
  },
  {
    path: 'apoyar-modal',
    loadChildren: () => import('./pages/apoyar-modal/apoyar-modal.module').then( m => m.ApoyarModalPageModule)
  }
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
