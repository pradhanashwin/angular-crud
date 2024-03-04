import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Module } from '../models/module.model';
import { Lesson } from '../models/lesson.model';

const baseUrl = 'http://localhost:8000/api/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(baseUrl);
  }

  getCourse(id: any): Observable<Course>{
    // only return data of courses
    return this.http.get(`${baseUrl}/${id}`);
  }

  getCourseDetails(id:any):Observable<Course>{
    let params = new HttpParams();
    params = params.append('module', true);
    params = params.append('lesson', true);
    return this.http.get(`${baseUrl}/${id}`,{params});
  }
  getCourseMoudles(courseId: any): Observable<Module[]>{
    return this.http.get<Module[]>(`${baseUrl}/module/?courseId=${courseId}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseUrl}?title=${title}`);
  }
}
