import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutocuidadoPage } from './autocuidado.page';

describe('AutocuidadoPage', () => {
  let component: AutocuidadoPage;
  let fixture: ComponentFixture<AutocuidadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocuidadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutocuidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
