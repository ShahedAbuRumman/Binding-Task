import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationcardComponent } from './vacationcard.component';

describe('VacationcardComponent', () => {
  let component: VacationcardComponent;
  let fixture: ComponentFixture<VacationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
