import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-subject-overview',
  templateUrl: './subject-overview.component.html',
  styleUrls: ['./subject-overview.component.css']
})
export class SubjectOverviewComponent implements OnInit {

  currentUrl: string;
  countSubjectAll: number;
  countSubjectMysql: number;
  countSubjectExpressjs: number;
  countSubjectAngular: number;
  countSubjectNodejs: number;

  constructor(private router: Router, private articlesService: ArticlesService) {
    this.router.events.subscribe((path: NavigationEnd) => {
      if(path.url){
      this.currentUrl = path.url;

      // countSubjectAll
      articlesService.countSubjectAll().subscribe(json => { 
        this.countSubjectAll = json.countSubjectAll    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectMysql
      articlesService.countSubjectMysql().subscribe(json => { 
        this.countSubjectMysql = json.countSubjectMysql    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectExpressjs
      articlesService.countSubjectExpressjs().subscribe(json => { 
        this.countSubjectExpressjs = json.countSubjectExpressjs    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectAngular
      articlesService.countSubjectAngular().subscribe(json => { 
        this.countSubjectAngular = json.countSubjectAngular    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectNodejs
      articlesService.countSubjectNodejs().subscribe(json => { 
        this.countSubjectNodejs = json.countSubjectNodejs    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      }
    });
  }

  ngOnInit() {}
}
