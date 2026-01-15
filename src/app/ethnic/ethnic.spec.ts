import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ethnic } from './ethnic';

describe('Ethnic', () => {
  let component: Ethnic;
  let fixture: ComponentFixture<Ethnic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ethnic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ethnic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
