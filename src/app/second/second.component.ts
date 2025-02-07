import { Component } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  studentList: Student[] = [];
  rollno: number = 0;
  student: Student = new Student('','','','','','','','');

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.fetchAllStudents();
  }

  getStudentId(rno : String){
    console.log("Get Student ID: ", rno);
    this.rollno = Number(rno);
    this.student = new Student('','','','','','','','');
    this.fetchAStudent(this.rollno);
  }

  fetchAllStudents() {
    this.studentService.getAllStudents()
    .subscribe((data: Student[]) => {
      this.studentList = data;
    });
  }

  fetchAStudent(rno:number){
    this.studentService
      .getStudentId(rno)
      .subscribe((data: Student) => {
        this.student = data;
        console.log('Data requested ... ');
        console.log(this.student);
    });
  }

}
