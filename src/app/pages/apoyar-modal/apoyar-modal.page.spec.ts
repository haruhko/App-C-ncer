import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApoyarModalPage } from './apoyar-modal.page';

describe('ApoyarModalPage', () => {
  let component: ApoyarModalPage;
  let fixture: ComponentFixture<ApoyarModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyarModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApoyarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
