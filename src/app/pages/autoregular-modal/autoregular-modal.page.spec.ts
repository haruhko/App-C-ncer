import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoregularModalPage } from './autoregular-modal.page';

describe('AutoregularModalPage', () => {
  let component: AutoregularModalPage;
  let fixture: ComponentFixture<AutoregularModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoregularModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoregularModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
