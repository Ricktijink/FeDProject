import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fed-project';

  articlesDT
  
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(articles => this.articlesDT = articles)
  }

}
