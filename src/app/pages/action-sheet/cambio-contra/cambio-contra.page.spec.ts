import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambioContraPage } from './cambio-contra.page';

describe('CambioContraPage', () => {
  let component: CambioContraPage;
  let fixture: ComponentFixture<CambioContraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioContraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
