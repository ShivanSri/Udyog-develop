import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageemployerComponent } from './manageemployer.component';

describe('ManageemployerComponent', () => {
  let component: ManageemployerComponent;
  let fixture: ComponentFixture<ManageemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
