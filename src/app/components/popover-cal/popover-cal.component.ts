import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalModalPage } from '../../pages/cal-modal/cal-modal.page';
import { MenuController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { title } from 'process';


@Component({
  selector: 'app-popover-cal',
  templateUrl: './popover-cal.component.html',
  styleUrls: ['./popover-cal.component.scss'],
})
export class PopoverCalComponent implements OnInit {

  eventSource = [];
  viewTitle: string;

  calendar = {
    mode:'month',
    currentDate: new Date(),
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,) { }

  ngOnInit() {}

  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onClick(){
    this.popoverCtrl.dismiss();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
  createRandomEvents(){
    var events = [];
    for (var i = 0; i < 50; i+= 1){
      var date = new Date ();
      var eventType = Math.floor(Math.random()* 2);
      var startDay = Math.floor(Math.random()* 90) - 45;
      var endDay = Math.floor(Math.random()* 2) + startDay;
      var startTime;
      var endTime;
      if ( eventType=== 0){
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if ( endDay=== startDay){
          endDay += 1; }
          
          endTime = new Date(
            Date.UTC(
              date.getUTCFullYear(),
              date.getUTCMonth(),
              date.getUTCDate() + endDay
            )
          );
          events.push({
            title: 'All Day -' + i,
            startTime: startTime,
            endTime: endTime,
            allDay: true,
          });
      } else {
        var startMinute = Math.floor(Math.random()* 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date (
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date (
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event -' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }

    }
    this.eventSource = events;
  }

  removeEvents(){
    this.eventSource = [];
  } 

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
   
    await modal.present();
   
    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
    this.popoverCtrl.dismiss();
  }

}
