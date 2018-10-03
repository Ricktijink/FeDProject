import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectOverviewComponent } from './subject-overview/subject-overview.component';
import { MemocardListComponent } from './memocard-list/memocard-list.component';
import { AboutComponent } from './about/about.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DatabaseOverviewComponent } from './database-overview/database-overview.component';
import { CreateMemoFormComponent } from './create-memo-form/create-memo-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';
@NgModule({
  declarations: [
    AppComponent,
    SubjectOverviewComponent,
    MemocardListComponent,
    AboutComponent,
    TutorialComponent,
    DatabaseOverviewComponent,
    CreateMemoFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
