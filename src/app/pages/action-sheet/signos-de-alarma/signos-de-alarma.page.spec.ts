import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignosDeAlarmaPage } from './signos-de-alarma.page';

describe('SignosDeAlarmaPage', () => {
  let component: SignosDeAlarmaPage;
  let fixture: ComponentFixture<SignosDeAlarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignosDeAlarmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignosDeAlarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
