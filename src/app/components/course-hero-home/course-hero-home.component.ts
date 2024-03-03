import { Component } from '@angular/core';
import { CourseNavbarComponent } from '../course-navbar/course-navbar.component';
import { CourseListComponent } from '../course-list/course-list.component';
@Component({
  selector: 'app-course-hero-home',
  standalone: true,
  imports: [CourseNavbarComponent,CourseListComponent],
  templateUrl: './course-hero-home.component.html',
  styleUrl: './course-hero-home.component.css'
})
export class CourseHeroHomeComponent {

}
