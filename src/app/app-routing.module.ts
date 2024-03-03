import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";
import { CourseHeroHomeComponent } from "./components/course-hero-home/course-hero-home.component";
import { CourseExploreComponent } from "./components/course-explore/course-explore.component";
const routes: Routes = [
    { path: '', component: CourseHeroHomeComponent},
    { path: 'courses', component: CourseExploreComponent },
    { path: 'courses/:id', component: CourseDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
