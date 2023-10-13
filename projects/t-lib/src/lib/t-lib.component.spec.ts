import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLibComponent } from './t-lib.component';

describe('TLibComponent', () => {
  let component: TLibComponent;
  let fixture: ComponentFixture<TLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TLibComponent]
    });
    fixture = TestBed.createComponent(TLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
