import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaquestionComponent } from './javaquestion.component';

describe('JavaquestionComponent', () => {
  let component: JavaquestionComponent;
  let fixture: ComponentFixture<JavaquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
