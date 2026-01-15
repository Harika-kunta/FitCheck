import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Western } from './western';

describe('Western', () => {
  let component: Western;
  let fixture: ComponentFixture<Western>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Western]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Western);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
