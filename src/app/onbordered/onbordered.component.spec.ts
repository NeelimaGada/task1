import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnborderedComponent } from './onbordered.component';

describe('OnborderedComponent', () => {
  let component: OnborderedComponent;
  let fixture: ComponentFixture<OnborderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnborderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnborderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
