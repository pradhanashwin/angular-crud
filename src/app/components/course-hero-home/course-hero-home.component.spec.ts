import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHeroHomeComponent } from './course-hero-home.component';

describe('CourseHeroHomeComponent', () => {
  let component: CourseHeroHomeComponent;
  let fixture: ComponentFixture<CourseHeroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHeroHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseHeroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
