import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRemittancesComponent } from './show-all-remittances.component';

describe('ShowAllRemittancesComponent', () => {
  let component: ShowAllRemittancesComponent;
  let fixture: ComponentFixture<ShowAllRemittancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRemittancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRemittancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
