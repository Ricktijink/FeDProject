import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-database-overview',
  templateUrl: './database-overview.component.html',
  styleUrls: ['./database-overview.component.css']
})
export class DatabaseOverviewComponent implements OnInit {

  articlesDT
  
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(articles => this.articlesDT = articles)
  }
}
