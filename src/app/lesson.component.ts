import { Component } from '@angular/core';
import { LessonService } from './lesson.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
     selector : "app-lesson",
     template : `
         <h1 [style.Color] = "isActive ? 'blue' :'red'" [textContent] = "title"></h1>
         <div class="input-group pull-right">
         <img [src]="image" [alt]= "title" [height] = "height" >
         <div class="input-group pull-right">
         <div class="col-lg-4" (click)="onClickDiv()">
           <button class="btn btn-info" [class.active] = "isActive" (click)="onClick($event)">Mon Button</button>
         </div>
         <div class="col-lg-4">
                  <input [(ngModel)]="model"  type="text" (keyup.enter)="onKeyUp()" />
                  <p>{{model}}</p>
         </div>
         </div>
         <div class="container">
                 <ul class="list-group">
                    <li class="list-group-item">Titre: {{courses.titre | lowercase}} </li>
                    <li class="list-group-item">Avis: {{courses.avis | number : '3.1-3'}}  </li>
                    <li class="list-group-item">Participants: {{courses.participants | number : '3.1-2'}} </li>
                    <li class="list-group-item">Prix:  {{courses.prix | currency : 'EUR'}} </li>
                    <li class="list-group-item">Date: {{courses.date |date: 'longDate'}}  </li>
                 </ul>
                 <p>{{ usingCustomPipe | resume : 5}}</p>
         </div>
     `
})
export class LessonComponents {
     model : string = "Mouaouia@mouaouia";
     isActive = true;
     flag :boolean = false
     title  = "Mouaouia";
     height = 100;
     image = "https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-512.png";
     lessons;
     usingCustomPipe : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type";
     courses = {
          titre : "formation angular 5",
          avis : 4.98765 ,
          participants : 345, 
          prix : 400.34 , 
          date: new Date( 17 , 12 , 2021)
     };
     constructor(service: LessonService){
          this.lessons = service.getLessons();
     }
     onKeyUp(){
          console.log(this.model);
          }
     onClickDiv(){
          console.log("Div is clicked");
     }
     onClick($event){
          $event.stopPropagation();
          console.log("Button clicked", $event.screenX);
     }

     getTitle(){
         return this.title; 
     }
}