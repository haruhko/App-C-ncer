import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Estadisticas2Page } from './estadisticas2.page';

describe('Estadisticas2Page', () => {
  let component: Estadisticas2Page;
  let fixture: ComponentFixture<Estadisticas2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Estadisticas2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Estadisticas2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
