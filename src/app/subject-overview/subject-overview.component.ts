import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { SubjectCounterAll } from '../subjectCounterAll';
import { SubjectCounterMysql } from '../subjectCounterMysql';
import { SubjectCounterExpressjs } from '../subjectCounterExpressjs';
import { SubjectCounterAngular } from '../subjectCounterAngular';
import { SubjectCounterNodejs } from '../subjectCounterNodejs';

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
      articlesService.countSubjectAll().subscribe((sc: SubjectCounterAll) => { 
        this.countSubjectAll = sc.countSubjectAll  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectMysql
      articlesService.countSubjectMysql().subscribe((sc: SubjectCounterMysql) => { 
        this.countSubjectMysql = sc.countSubjectMysql  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })
    
      // countSubjectExpressjs
      articlesService.countSubjectExpressjs().subscribe((sc: SubjectCounterExpressjs) => { 
        this.countSubjectExpressjs = sc.countSubjectExpressjs  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectAngular
      articlesService.countSubjectAngular().subscribe((sc: SubjectCounterAngular) => { 
        this.countSubjectAngular = sc.countSubjectAngular  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectNodejs
      articlesService.countSubjectNodejs().subscribe((sc: SubjectCounterNodejs) => { 
        this.countSubjectNodejs = sc.countSubjectNodejs  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      }
    });
  }

  ngOnInit() {}
}
