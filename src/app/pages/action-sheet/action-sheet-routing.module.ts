import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage
  },
  {
    path: 'sintomas-fisicos',
    loadChildren: () => import('./sintomas-fisicos/sintomas-fisicos.module').then( m => m.SintomasFisicosPageModule)
  },
  {
    path: 'sintomas-sicologicos',
    loadChildren: () => import('./sintomas-sicologicos/sintomas-sicologicos.module').then( m => m.SintomasSicologicosPageModule)
  },
  {
    path: 'estado-de-animo',
    loadChildren: () => import('./estado-de-animo/estado-de-animo.module').then( m => m.EstadoDeAnimoPageModule)
  },
  {
    path: 'efectos-secundarios',
    loadChildren: () => import('./efectos-secundarios/efectos-secundarios.module').then( m => m.EfectosSecundariosPageModule)
  },
  {
    path: 'autocuidado',
    loadChildren: () => import('./autocuidado/autocuidado.module').then( m => m.AutocuidadoPageModule)
  },
  {
    path: 'recreacion',
    loadChildren: () => import('./recreacion/recreacion.module').then( m => m.RecreacionPageModule)
  },
  {
    path: 'habitos',
    loadChildren: () => import('./habitos/habitos.module').then( m => m.HabitosPageModule)
  },
  {
    path: 'auto-evalucion',
    loadChildren: () => import('./auto-evalucion/auto-evalucion.module').then( m => m.AutoEvalucionPageModule)
  },
  {
    path: 'mi-plan',
    loadChildren: () => import('./mi-plan/mi-plan.module').then( m => m.MiPlanPageModule)
  },
  {
    path: 'signos-de-alarma',
    loadChildren: () => import('./signos-de-alarma/signos-de-alarma.module').then( m => m.SignosDeAlarmaPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'tratamiento',
    loadChildren: () => import('./tratamiento/tratamiento.module').then( m => m.TratamientoPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then( m => m.OpcionesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
