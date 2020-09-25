import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasSicologicosPage } from './sintomas-sicologicos.page';

describe('SintomasSicologicosPage', () => {
  let component: SintomasSicologicosPage;
  let fixture: ComponentFixture<SintomasSicologicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasSicologicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasSicologicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
