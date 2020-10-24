import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprenderComponent } from './aprender.component';

describe('AprenderComponent', () => {
  let component: AprenderComponent;
  let fixture: ComponentFixture<AprenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprenderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
