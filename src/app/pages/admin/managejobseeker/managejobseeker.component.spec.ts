import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagejobseekerComponent } from './managejobseeker.component';

describe('ManagejobseekerComponent', () => {
  let component: ManagejobseekerComponent;
  let fixture: ComponentFixture<ManagejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
