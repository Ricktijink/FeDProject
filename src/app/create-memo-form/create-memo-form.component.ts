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

  articles: Articles = { id: 0, subject: 'x', title: '', description: '', published: new Date(), text: ''}
  

  submit() {
    console.log(" submit the following " + this.articles.title);

    this.articlesService.sendArticles(this.articles).subscribe( () => 
    window.location.href = '/all')
    // FIXME: this.router.navigateByUrl('/all'))
    alert("Memo is created"); 
  }

  constructor(private router: Router, private articlesService: ArticlesService) { }

  

  ngOnInit() {
  }

}
