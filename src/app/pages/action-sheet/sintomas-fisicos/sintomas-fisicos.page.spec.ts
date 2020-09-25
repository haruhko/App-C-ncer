import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasFisicosPage } from './sintomas-fisicos.page';

describe('SintomasFisicosPage', () => {
  let component: SintomasFisicosPage;
  let fixture: ComponentFixture<SintomasFisicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasFisicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasFisicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
