import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-efectos',
  templateUrl: './efectos.component.html',
  styleUrls: ['./efectos.component.scss'],
})
export class EfectosComponent implements OnInit {

  @Input('efectos') efectos: any;
  constructor() { }

  ngOnInit() {}

}
