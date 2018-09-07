import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import generated components
import { TutorialComponent } from './tutorial/tutorial.component';
import { AboutComponent } from './about/about.component';
import { CreateMemoFormComponent } from './create-memo-form/create-memo-form.component';


const routes: Routes = [
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'creatememo',
    component: CreateMemoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
