import { Component } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-explore',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './course-explore.component.html',
  styleUrl: './course-explore.component.css'
})
export class CourseExploreComponent {

}
