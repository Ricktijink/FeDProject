import { Component, OnInit } from '@angular/core';

// test
import { Articles } from '../articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-create-memo-form',
  templateUrl: './create-memo-form.component.html',
  styleUrls: ['./create-memo-form.component.css']
})
export class CreateMemoFormComponent implements OnInit {

  articles: Articles = { id: 0, subject: '', title: '', description: '', text: '' }
  
  submit() {
    // Console log test the input
    console.log(" submit the following " + this.articles.title);

    this.articlesService.sendArticles(this.articles).subscribe()
    alert("Memo is created");
  }

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  }

}
