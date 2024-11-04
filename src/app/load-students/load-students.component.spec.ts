import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStudentsComponent } from './load-students.component';

describe('LoadStudentsComponent', () => {
  let component: LoadStudentsComponent;
  let fixture: ComponentFixture<LoadStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStudentsComponent]
    });
    fixture = TestBed.createComponent(LoadStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
