import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiPlanPage } from './mi-plan.page';

describe('MiPlanPage', () => {
  let component: MiPlanPage;
  let fixture: ComponentFixture<MiPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
