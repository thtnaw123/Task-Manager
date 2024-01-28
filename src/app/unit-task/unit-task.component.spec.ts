import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTaskComponent } from './unit-task.component';

describe('UnitTaskComponent', () => {
  let component: UnitTaskComponent;
  let fixture: ComponentFixture<UnitTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
