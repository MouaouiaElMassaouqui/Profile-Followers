import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
    i : number = 0;
   post = {
     title : "Mouaouia",
     isFavorite : false
   }
    
   viewCourse = 'AAAAa';
  courses;

  langage;
  name;

  onFavoriteChanged(args){
    console.log("favorite changed", args);
  }
  addCourse(name, langage){
    if (name != "" && langage != "")
    this.courses.push({langage, name});
  }
  deleteCourse(i){
    this.courses.splice(i, 1);
  }
  updateCourse(course){
    let index = this.courses.find(index => index.name == course.name);
     this.name = index.name;
     this.langage= index.langage;

  }
  trackCourses(index, course){
    return course ? course.id : undefined;
  }
  LoadFirst(){
    this.courses = [{ langage: 'Angular', name: 'course Angular' },
    { langage: 'VUEJS', name: 'course VUEJS' },
    { langage: 'ReactJS', name: 'course ReactJS' },
    { langage: 'Spring', name: 'course Spring' },
    { langage: 'NextJs', name: 'course NextJs' }

    ];
  }
}
