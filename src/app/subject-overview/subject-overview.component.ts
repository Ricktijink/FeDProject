import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-subject-overview',
  templateUrl: './subject-overview.component.html',
  styleUrls: ['./subject-overview.component.css']
})
export class SubjectOverviewComponent implements OnInit {

  currentUrl
  countSubjectAll
  countSubjectMysql
  countSubjectExpressjs
  countSubjectAngular
  countSubjectNodejs

  constructor(private router: Router, private articlesService: ArticlesService) {
    this.router.events.subscribe((path: NavigationEnd) => {
      if(path.url){
      this.currentUrl = path.url;

      // countSubjectAll
      articlesService.countSubjectAll().subscribe(all => { 
        this.countSubjectAll = all    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectMysql
      articlesService.countSubjectMysql().subscribe(sql => { 
        this.countSubjectMysql = sql  // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectExpressjs
      articlesService.countSubjectExpressjs().subscribe(express => { 
        this.countSubjectExpressjs = express    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectAngular
      articlesService.countSubjectAngular().subscribe( angular => { 
        this.countSubjectAngular =  angular    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      // countSubjectNodejs
      articlesService.countSubjectNodejs().subscribe(node => { 
        this.countSubjectNodejs = node    // Deze genereert in de compiler van VScode een problem indicatie maar de code is functioneel
      })

      }
    });
  }


  ngOnInit() {
  }
}
