import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemittanceComponent } from './show-remittance.component';

describe('ShowRemittanceComponent', () => {
  let component: ShowRemittanceComponent;
  let fixture: ComponentFixture<ShowRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRemittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
