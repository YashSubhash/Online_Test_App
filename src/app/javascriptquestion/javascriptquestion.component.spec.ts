import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptquestionComponent } from './javascriptquestion.component';

describe('JavascriptquestionComponent', () => {
  let component: JavascriptquestionComponent;
  let fixture: ComponentFixture<JavascriptquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
