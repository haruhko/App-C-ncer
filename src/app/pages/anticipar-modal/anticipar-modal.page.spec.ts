import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnticiparModalPage } from './anticipar-modal.page';

describe('AnticiparModalPage', () => {
  let component: AnticiparModalPage;
  let fixture: ComponentFixture<AnticiparModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticiparModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnticiparModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
