import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneresPage } from './generes.page';

describe('GeneresPage', () => {
  let component: GeneresPage;
  let fixture: ComponentFixture<GeneresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
