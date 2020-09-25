import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecreacionPage } from './recreacion.page';

describe('RecreacionPage', () => {
  let component: RecreacionPage;
  let fixture: ComponentFixture<RecreacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecreacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
