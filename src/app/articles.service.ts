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

  
  getArticles() {
    return  this.http.get('http://localhost:3000/');
  }

  sendArticles (articles: Articles) {
    return this.http.post('http://localhost:3000/', articles)
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  // onSubmit() { 
  // this.submitted = true; 
  // console.log(JSON.stringify(this.model))
  // this.userService.sendUsers(this.model).subscribe()
  // }

  deleteArticle(id) {
    return this.http.delete('http://localhost:3000/' + id )
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }

  articleDetails(id) {
    return this.http.get('http://localhost:3000/' + id )
    .pipe(catchError((err: any, caught: Observable<{}>) => void console.log(err))
    );
  }
}
