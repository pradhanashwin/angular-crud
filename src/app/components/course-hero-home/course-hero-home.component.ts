import { Component } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-hero-home',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './course-hero-home.component.html',
  styleUrl: './course-hero-home.component.css'
})
export class CourseHeroHomeComponent {
  constructor(
    private route: ActivatedRoute,
  ){
  }
}
