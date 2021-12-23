import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlquestionComponent } from './htmlquestion.component';

describe('HtmlquestionComponent', () => {
  let component: HtmlquestionComponent;
  let fixture: ComponentFixture<HtmlquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
