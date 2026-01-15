import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traditional } from './traditional';

describe('Traditional', () => {
  let component: Traditional;
  let fixture: ComponentFixture<Traditional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Traditional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Traditional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
