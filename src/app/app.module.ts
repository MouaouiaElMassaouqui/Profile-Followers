import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LessonComponents } from './lesson.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonService } from './lesson.service';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { SpecialAlphaNumericDirective } from './special-alpha-numeric.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './Services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './Services/github-followers.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    LessonComponents,
    CoursesComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    SpecialAlphaNumericDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  FontAwesomeModule,
  ReactiveFormsModule,
  HttpClientModule,
  RoutingModule
  ],
  providers: [LessonService, EmailService, PostService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
