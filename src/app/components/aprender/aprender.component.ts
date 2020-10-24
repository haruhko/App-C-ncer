import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aprender',
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.scss'],
})
export class AprenderComponent implements OnInit {

  @Input('aprender') aprender: any;
  constructor() { }

  ngOnInit() {}

}
