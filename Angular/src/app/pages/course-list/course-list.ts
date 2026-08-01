import { Component, OnInit } from '@angular/core';
import { CourseCard } from "../../components/course-card/course-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard,CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  selectedCourseId:number | null = null;
  isLoading  =true;
  onEnroll(courseId:number){
    console.log("Enrolling in course: ",courseId);
    this.selectedCourseId = courseId;
    
  }
  trackByCourseId(index:number,course:any){
    return course.id;
  }
  courses = [
  {
    id: 1,
    name: 'Java',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  },
  {
    id: 2,
    name: 'Angular',
    code: 'CS102',
    credits: 3,
    gradeStatus: 'pending'
  },
  {
    id: 3,
    name: 'Spring Boot',
    code: 'CS103',
    credits: 4,
    gradeStatus: 'failed'
  }
];

  ngOnInit(): void {
      setTimeout(()=>{
        this.isLoading = false
        console.log("Loading Finished");
        
      },1500)
  }
  
}
