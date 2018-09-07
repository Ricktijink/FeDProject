import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import generated components
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutComponent } from './about/about.component';
import { MemocardListComponent } from './memocard-list/memocard-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'all',
    component: MemocardListComponent
  },
  {
    path: 'mysql',
    component: MemocardListComponent
  },
  {
    path: 'expressjs',
    component: MemocardListComponent
  },
  {
    path: 'angular',
    component: MemocardListComponent
  },
  {
    path: 'nodejs',
    component: MemocardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
