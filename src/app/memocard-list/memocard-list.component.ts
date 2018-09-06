import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-memocard-list',
  templateUrl: './memocard-list.component.html',
  styleUrls: ['./memocard-list.component.css']
})
export class MemocardListComponent implements OnInit {

  articlesDT
  
  constructor(private articlesService: ArticlesService) { }

  getArticles() {
    this.articlesService.getArticles().subscribe(articles => this.articlesDT = articles)
  }

  delete(id) {
    console.log("delete " + id)
    this.articlesService.deleteArticle(id)
    .subscribe(
      () => this.getArticles()
    );
    
    
  }

  ngOnInit() {
    this.getArticles();
  }

}
