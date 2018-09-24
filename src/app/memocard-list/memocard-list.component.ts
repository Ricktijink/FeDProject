import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Articles } from '../articles';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-memocard-list',
  templateUrl: './memocard-list.component.html',
  styleUrls: ['./memocard-list.component.css'],

  // Animation for memo's:
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-392px)' }),
            stagger(
              '50ms',
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateX(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class MemocardListComponent implements OnInit {
  
  articlesDT
  articleDetails: Articles
  showDetails = false;

  constructor(private articlesService: ArticlesService) { }

  getArticles() {
    this.articlesService.getArticles().subscribe(articles => this.articlesDT = articles, error => console.log(error))
  }

  getSubject(subject) {
    console.log("Subject: " + subject)
    this.articlesService.getSubject(subject).subscribe(
      articles => this.articlesDT = articles, error => console.log(error)
    );
  }

  delete(id) {
    console.log("delete " + id)
    this.articlesService.deleteArticle(id)
    .subscribe(() => {
      this.ngOnInit() },
      error => console.log(error)
    );   
    alert("Memo is deleted");
  }

  details(id) {
    console.log("details " + id)
    this.showDetails= !this.showDetails;
    this.articlesService.articleDetails(id).subscribe(
      articlesDT => this.articleDetails = articlesDT[0]
    );
  }


  ngOnInit() {
    let pathname = window.location.pathname
    let appId = pathname.split('/')[1]

    if (appId == 'all') {
      this.getArticles()
    }
    else {
      this.getSubject( appId.toString());
    }
    
  }

}
