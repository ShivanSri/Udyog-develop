import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonejobsComponent } from './clonejobs.component';

describe('ClonejobsComponent', () => {
  let component: ClonejobsComponent;
  let fixture: ComponentFixture<ClonejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonejobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
