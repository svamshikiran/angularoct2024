import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../../model/student.model';

const httpOptionsAllStudents = {
	headers: new HttpHeaders(
	{
	  'Content-Type': 'application/json',
    'Authorization': `Basic ` + btoa('testuser:userpassword'),
	}
	)
};

const httpOptionsGetStudents = {
	headers: new HttpHeaders(
	{
	  'Content-Type': 'application/json',
    'Authorization': `Basic ` + btoa('testuser:userpassword'),
	}
	)
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  all_students_url: String = "http://localhost:9011/oct2024-local/student/all";

  get_student_rollno_url: String = "http://localhost:9011/oct2024-local/student/get"

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]>{
	  return this.http.get<Student[]>(`${this.all_students_url}`, httpOptionsAllStudents);	
  }

  getStudentId(id:number): Observable<Student>{
	  return this.http.get<Student>(`${this.get_student_rollno_url}/${id}`, httpOptionsGetStudents);	
  }
}