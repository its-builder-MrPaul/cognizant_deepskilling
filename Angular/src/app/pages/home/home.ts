import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit,OnDestroy {
  portalName = 'Student Course Portal';
  totalCourse = 0;
  enrolledCourse = 3
  gpa=3.8
  isPortalActive = true;
  message = '';
  studentName = "";
  favoriteCourse = "";
  onEnrollClick(){
    this.message = "Enrollment Opened!";
  }
  ngOnInit(): void {
      this.totalCourse=12
      console.log("HomeComponent intialised - courses loaded");
      
  }
  ngOnDestroy(): void {
      console.log("HomeComponent destroyed");
      
  }
  
}
