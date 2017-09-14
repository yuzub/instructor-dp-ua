import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InstructorListComponent } from './instructors/instructor-list.component';
import { InstructorDetailComponent } from './instructors/instructor-detail.component';
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent, InstructorListComponent, InstructorDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'instructors', component: InstructorListComponent },
      { path: 'instructors/:id', component: InstructorDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
