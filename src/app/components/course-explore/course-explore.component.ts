import { Component } from '@angular/core';
import { CourseNavbarComponent } from '../course-navbar/course-navbar.component';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-explore',
  standalone: true,
  imports: [CourseNavbarComponent, CourseListComponent],
  templateUrl: './course-explore.component.html',
  styleUrl: './course-explore.component.css'
})
export class CourseExploreComponent {

}
