import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Estadisticas1Page } from './estadisticas1.page';

describe('Estadisticas1Page', () => {
  let component: Estadisticas1Page;
  let fixture: ComponentFixture<Estadisticas1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Estadisticas1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Estadisticas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
