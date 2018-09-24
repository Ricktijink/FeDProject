import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Articles } from './articles';
import {Observable} from 'rxjs';
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { 
  }

  // Get items from database
  getArticles() {
    return  this.http.get('http://localhost:3000/')
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  // items of a specified subject from database
  getSubject(subject) {
    return this.http.get('http://localhost:3000/' + subject)
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  // Send items to database
  sendArticles (articles: Articles) {
    return this.http.post('http://localhost:3000/creatememo', articles)
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  // Delete items from database
  deleteArticle(id) {
    return this.http.delete('http://localhost:3000/' + id )
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  // Get information of one item from database
  articleDetails(id) {
    return this.http.get('http://localhost:3000/' + id )
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }
}
