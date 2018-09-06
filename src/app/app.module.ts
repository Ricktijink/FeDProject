import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectOverviewComponent } from './subject-overview/subject-overview.component';
import { MemocardListComponent } from './memocard-list/memocard-list.component';
import { DatabaseOverviewComponent } from './database-overview/database-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectOverviewComponent,
    MemocardListComponent,
    DatabaseOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
