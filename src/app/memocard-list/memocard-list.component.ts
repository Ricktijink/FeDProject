import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Articles } from '../articles';

@Component({
  selector: 'app-memocard-list',
  templateUrl: './memocard-list.component.html',
  styleUrls: ['./memocard-list.component.css']
})
export class MemocardListComponent implements OnInit {

  articlesDT
  articleDetails: Articles
  showDetails = false;

  constructor(private articlesService: ArticlesService) { }

  getArticles() {
    this.articlesService.getArticles().subscribe(articles => this.articlesDT = articles, error => console.log(error))
  }

  delete(id) {
    console.log("delete " + id)
    this.articlesService.deleteArticle(id)
    .subscribe(() => {
      console.log('subscribe')
      this.getArticles() },
      error => console.log(error)
    );   
  }

  details(id) {
    console.log("details " + id)
    this.showDetails= !this.showDetails;
    this.articlesService.detailsUser(id).subscribe(
      articlesDT => this.articleDetails = articlesDT[0]
    );
  }


  ngOnInit() {
    this.getArticles();
  }

}
