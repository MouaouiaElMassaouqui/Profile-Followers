import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../CommonValidators/app-error';
import { BadInput } from '../CommonValidators/bad-input';
import { NotFoundError } from '../CommonValidators/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private url: string, private http: HttpClient) { }

  // display
  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  // add 
  Create(post) {
    return this.http.post(this.url, post).pipe(
      catchError(this.handleError)
    );
  }

  // Edit 
  update(post) {
    return this.http.put(this.url + '/' + post.id, post).pipe(catchError(this.handleError));
  }

  //delete  
  delete(post) {
    return this.http.delete(this.url + '/' + post.id).pipe(
      catchError(this.handleError));
  }

  handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError);
    }
    if (error.status === 400) {
      return throwError(new BadInput);
    }
    return throwError(new AppError);
  }
}
