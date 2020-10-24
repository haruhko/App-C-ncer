import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomassicoComponent } from './sintomassico.component';

describe('SintomassicoComponent', () => {
  let component: SintomassicoComponent;
  let fixture: ComponentFixture<SintomassicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomassicoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
