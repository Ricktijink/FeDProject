import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// test
import { Articles } from '../articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-create-memo-form',
  templateUrl: './create-memo-form.component.html',
  styleUrls: ['./create-memo-form.component.css']
})
export class CreateMemoFormComponent implements OnInit {

  articles: Articles = { id: 0, subject: '', title: '', description: '', published: new Date(), text: ''}
  

  submit() {
    // Console log test the input
    console.log(" submit the following " + this.articles.title);

    this.articlesService.sendArticles(this.articles).subscribe()
    alert("Memo is created");
    this.router.navigateByUrl('/all');
  }

  constructor(private router: Router, private articlesService: ArticlesService) { }

  

  ngOnInit() {
  }

}
