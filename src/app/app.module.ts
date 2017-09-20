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
import { InstructorGuardService } from './instructors/instructor-guard.service';
import { InstructorFbService } from "./instructors/instructor-fb.service";
import { InstructorEditComponent } from './instructors/instructor-edit.component';

@NgModule({
  declarations: [
    AppComponent, InstructorListComponent, InstructorDetailComponent, WelcomeComponent, InstructorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'instructors', component: InstructorListComponent },
      { path: 'instructors/:id', component: InstructorDetailComponent },
      { path: 'instructor-edit/:id', component: InstructorEditComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [InstructorFbService, InstructorGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
