import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExploreComponent } from './course-explore.component';

describe('CourseExploreComponent', () => {
  let component: CourseExploreComponent;
  let fixture: ComponentFixture<CourseExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
