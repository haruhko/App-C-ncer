import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoEvalucionPage } from './auto-evalucion.page';

describe('AutoEvalucionPage', () => {
  let component: AutoEvalucionPage;
  let fixture: ComponentFixture<AutoEvalucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEvalucionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoEvalucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
