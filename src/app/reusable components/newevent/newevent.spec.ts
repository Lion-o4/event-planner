import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newevent } from './newevent';

describe('Newevent', () => {
  let component: Newevent;
  let fixture: ComponentFixture<Newevent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newevent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newevent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
