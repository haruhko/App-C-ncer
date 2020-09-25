import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadoDeAnimoPage } from './estado-de-animo.page';

describe('EstadoDeAnimoPage', () => {
  let component: EstadoDeAnimoPage;
  let fixture: ComponentFixture<EstadoDeAnimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeAnimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoDeAnimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
