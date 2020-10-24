import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmonizarModalPage } from './armonizar-modal.page';

describe('ArmonizarModalPage', () => {
  let component: ArmonizarModalPage;
  let fixture: ComponentFixture<ArmonizarModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmonizarModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmonizarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
