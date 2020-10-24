import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasfisComponent } from './sintomasfis.component';

describe('SintomasfisComponent', () => {
  let component: SintomasfisComponent;
  let fixture: ComponentFixture<SintomasfisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasfisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
