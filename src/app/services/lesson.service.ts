import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getLessonDetails(id:any):Observable<Lesson>{
    let params = new HttpParams();
    return this.http.get(`${baseUrl}/${id}`,{params});
  }
}
