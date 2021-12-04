import { Component } from "@angular/core";
import { LessonService } from './lesson.service';

@Component({
    selector : 'courses',
    templateUrl : './courses.component.html'
}
)

export class CoursesComponent {

       title = " This is a Exhausted day";
    //    image = "https://www.dashe.com/hubfs/personalized_learning_blog.png";
       isActive = true;
       langauges;
       email;

       constructor(private lessonService: LessonService){
           this.langauges = lessonService.Display();
       }

    onClick($event){
        $event.stopPropagation();
        console.log('Button clicked', $event);
    }
    onClickDiv(){
        console.log("div is clicked");

    }
    onKeyUp(email) {
        console.log(email + "Xfiha");
    }
    // onKeyUp($event){
    //     console.log($event.target.id);
    // }
    // onKeyUp(){
    //     console.log('angular key up');
    // }
        getTitle(){
            return this.title;
        }

}