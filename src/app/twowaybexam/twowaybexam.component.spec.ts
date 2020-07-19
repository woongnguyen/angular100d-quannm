import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybexamComponent } from './twowaybexam.component';

describe('TwowaybexamComponent', () => {
  let component: TwowaybexamComponent;
  let fixture: ComponentFixture<TwowaybexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaybexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
