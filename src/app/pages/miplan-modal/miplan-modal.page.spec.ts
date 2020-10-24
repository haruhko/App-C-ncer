import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiplanModalPage } from './miplan-modal.page';

describe('MiplanModalPage', () => {
  let component: MiplanModalPage;
  let fixture: ComponentFixture<MiplanModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiplanModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiplanModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
