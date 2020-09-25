import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TratamientoPage } from './tratamiento.page';

describe('TratamientoPage', () => {
  let component: TratamientoPage;
  let fixture: ComponentFixture<TratamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TratamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
