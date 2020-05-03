import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElevationPage } from './elevation.page';

describe('ElevationPage', () => {
  let component: ElevationPage;
  let fixture: ComponentFixture<ElevationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElevationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
