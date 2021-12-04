import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{

    getCourses() : String[] 
    {
        return  ['SprinngBoot', 'Angular', 'VueJS', 'AngularJS', 'Java'];
    }
  }