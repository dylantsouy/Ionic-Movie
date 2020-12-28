import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvPage } from './tv.page';

describe('TvPage', () => {
  let component: TvPage;
  let fixture: ComponentFixture<TvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
