import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicsPage } from './basics.page';

describe('BasicsPage', () => {
  let component: BasicsPage;
  let fixture: ComponentFixture<BasicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
