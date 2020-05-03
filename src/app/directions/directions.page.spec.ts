import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectionsPage } from './directions.page';

describe('DirectionsPage', () => {
  let component: DirectionsPage;
  let fixture: ComponentFixture<DirectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
