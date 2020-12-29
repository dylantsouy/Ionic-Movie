import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastPage } from './cast.page';

describe('CastPage', () => {
  let component: CastPage;
  let fixture: ComponentFixture<CastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
