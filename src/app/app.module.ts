import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseListComponent } from './components/course-list/course-list.component';
// import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavbarComponent } from './components/course-navbar/course-navbar.component';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    CourseNavbarComponent,
    AppRoutingModule,
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
