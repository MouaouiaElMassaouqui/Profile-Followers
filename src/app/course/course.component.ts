import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(courseService : CoursesService) { 
        this.courses = courseService.getCourses();
  }
      Name="Mouaouia";
      lesson = '';
      Title = "list of courses";
      image = "https://www.dashe.com/hubfs/personalized_learning_blog.png";
      titleImage ="myImage";
      courses;
      isActive = false ;

      onClick(){
        console.log("Mouaouia  clicka eela button")
      }
       
      getTitle(){
        this.Title;
      }

  ngOnInit(): void {
  }

}
