import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sarees } from './sarees';

describe('Sarees', () => {
  let component: Sarees;
  let fixture: ComponentFixture<Sarees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sarees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sarees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
