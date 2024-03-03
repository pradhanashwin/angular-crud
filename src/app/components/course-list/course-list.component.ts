import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CourseNavbarComponent } from '../course-navbar/course-navbar.component';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseNavbarComponent,SlickCarouselModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 3};
  constructor(private courseService: CourseService){}
  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.getCourses().subscribe((response: any) => {
      if (response && response.data) {
        this.courses = response.data;
      }
    });
  }
  
}
