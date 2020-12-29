import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviePage } from './movie.page';

describe('MoviePage', () => {
  let component: MoviePage;
  let fixture: ComponentFixture<MoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
