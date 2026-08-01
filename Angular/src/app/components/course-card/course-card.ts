import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule,HighlightDirective,CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  inEnrolled = false;
  isExpanded = false;
  @Input()
  course:any
  @Output()
  enrollRequested = new EventEmitter<number>()
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      
  }
  toogleDetail(){
    this.isExpanded = !this.isExpanded;
  }
  enroll(){
    this.inEnrolled=true;
    this.enrollRequested.emit(this.course.id)
  }
  get cardClasses(){
    return{
      'card--enrolled': this.inEnrolled,
      'card--full': this.course.credits>=4,
      'expanded': this.isExpanded
    }
  }
}
