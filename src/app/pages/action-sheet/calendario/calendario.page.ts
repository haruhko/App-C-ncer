import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { title } from 'process';
import { CalModalPage } from '../../cal-modal/cal-modal.page';
import { PopoverCalComponent } from 'src/app/components/popover-cal/popover-cal.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  

  eventSource = [];
  viewTitle: string;
  event = {
    id: '',
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: 'es-CO',
    formatWeekTitle: 'MMMM yyyy',
  };


  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.resetEvent();
  }
  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onEventSelected(){

  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  resetEvent(){
    this.event = {
      id: '',
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false

    };
  }
  async addEvent(){
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    };
    if (eventCopy.allDay){
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(),
      start.getUTCMonth(),
      start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(),
      end.getUTCMonth(),
      end.getUTCDate() + 1));
    }
    const toast = await this.toastCtrl.create({
      message: 'Se ha guardado un evento nuevo.',
      duration: 1500
    });
    toast.present();
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();

  }

  async removeEvents(){
    this.eventSource = [];
    
    const toast = await this.toastCtrl.create({
      message: 'Se han eliminado los eventos.',
      duration: 1500
    });
    toast.present();
  } 
  

//POPOVER DEL CALENDARIO PROVISIONAL USAR EN OTRA COSA
  //async presentPopover (ev: any) {
    //const popover = await this.popoverCtrl.create({
      //component: PopoverCalComponent,
      //cssClass: 'my-custom-class',
      //event: ev,
      //translucent: true
    //});
    //return await popover.present();
  //}
  
  

}
