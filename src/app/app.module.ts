import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { InstructorListComponent } from './instructors/instructor-list.component';
import { InstructorDetailComponent } from './instructors/instructor-detail.component';
import { WelcomeComponent } from "./home/welcome.component";
import { InstructorEditComponent } from './instructors/instructor-edit.component';
import { FeedbackListComponent } from './feedbacks/feedback-list.component';
import { FeedbackEditComponent } from "./feedbacks/feedback-edit.component";

import { InstructorFbService } from "./instructors/instructor-fb.service";
import { FeedbackFbService } from "./feedbacks/feedback-fb.service";
import { AuthService } from "./auth/auth.service";

import { InstructorGuardService } from './instructors/instructor-guard.service';
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    InstructorListComponent,
    InstructorDetailComponent,
    InstructorEditComponent,
    WelcomeComponent,
    FeedbackListComponent,
    FeedbackEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'instructors', component: InstructorListComponent, canActivate: [AuthGuard] },
      { path: 'instructors/:id', component: InstructorDetailComponent, canActivate: [AuthGuard] },
      { path: 'instructor-edit/:id', component: InstructorEditComponent, canActivate: [AuthGuard] },
      { path: 'feedbacks', component: FeedbackListComponent, canActivate: [AuthGuard] },
      { path: 'feedback-edit/:id', component: FeedbackEditComponent, canActivate: [AuthGuard] },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [
    AuthGuard, InstructorGuardService,
    InstructorFbService, AuthService, FeedbackFbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
