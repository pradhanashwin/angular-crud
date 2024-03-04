import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { Module } from '../../models/module.model';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-course-details',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  course!: Course | undefined;
  allModulesCollaped: boolean = true; // Track whether all modules are expanded or collapsed

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    ){}
  
    ngOnInit(): void {
      this.getCourse()
    }
    getCourse(): void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.courseService.getCourseDetails(id).subscribe((response: any) => {
        if (response) {
          response.modules.forEach((m: Module) => {
            m.collapsed = true; // Initialize 'collapsed' attribute for each module
          });
          this.course = response;
        }
      });
    }
    toggleCollapse(module: Module): void {
      module.collapsed = !module.collapsed;
    }
    expandAllModules(): void {
      if (this.course && this.course.modules) {
        this.course.modules.forEach((module: any) => {
          module.collapsed = !this.allModulesCollaped; // Toggle collapse state based on 'allModulesCollaped'
        });
        this.allModulesCollaped = !this.allModulesCollaped; // Toggle 'allModulesExpanded' after toggling modules
      }
    }
}
