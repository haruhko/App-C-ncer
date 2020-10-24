import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EfectosComponent } from './efectos.component';

describe('EfectosComponent', () => {
  let component: EfectosComponent;
  let fixture: ComponentFixture<EfectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EfectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
