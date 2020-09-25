import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EfectosSecundariosPage } from './efectos-secundarios.page';

describe('EfectosSecundariosPage', () => {
  let component: EfectosSecundariosPage;
  let fixture: ComponentFixture<EfectosSecundariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectosSecundariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EfectosSecundariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
