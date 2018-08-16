import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyleComponent } from './tyle.component';

describe('TyleComponent', () => {
  let component: TyleComponent;
  let fixture: ComponentFixture<TyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
