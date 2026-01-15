import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frocks } from './frocks';

describe('Frocks', () => {
  let component: Frocks;
  let fixture: ComponentFixture<Frocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Frocks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frocks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
