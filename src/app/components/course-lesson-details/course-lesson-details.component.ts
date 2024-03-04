import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-course-lesson-details',
  standalone: true,
  imports: [],
  templateUrl: './course-lesson-details.component.html',
  styleUrl: './course-lesson-details.component.css'
})
export class CourseLessonDetailsComponent implements OnInit{
  lesson!: Lesson | undefined;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
  ){}
  ngOnInit(): void {
      this.getLesson()
  }
  getLesson(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lessonService.getLessonDetails(id).subscribe((response: any) => {
      if (response) {
        this.lesson = response;
      }
    });
  }
}
