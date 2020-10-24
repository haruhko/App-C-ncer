import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprenderModalPage } from './aprender-modal.page';

describe('AprenderModalPage', () => {
  let component: AprenderModalPage;
  let fixture: ComponentFixture<AprenderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprenderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprenderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
