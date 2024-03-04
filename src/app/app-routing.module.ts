import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { CourseHeroHomeComponent } from "./components/course-hero-home/course-hero-home.component";
import { CourseExploreComponent } from "./components/course-explore/course-explore.component";
import { CourseLessonDetailsComponent } from "./components/course-lesson-details/course-lesson-details.component";
const routes: Routes = [
    { path: '', component: CourseHeroHomeComponent},
    { path: 'courses', component: CourseExploreComponent },
    { path: 'courses/:id', component: CourseDetailsComponent },
    { path: 'lessons/:id', component: CourseLessonDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
