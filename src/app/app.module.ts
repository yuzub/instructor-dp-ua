import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { InstructorListComponent } from './instructors/instructor-list.component';
import { InstructorDetailComponent } from './instructors/instructor-detail.component';
import { WelcomeComponent } from "./home/welcome.component";
import { InstructorGuardService } from './instructors/instructor-guard.service';

const firebaseConfig = {
  apiKey: "AIzaSyDTkUPX3aZjYJe8sGLFX1pTXdMbKC1TN1c",
  authDomain: "instructor-dp-ua.firebaseapp.com",
  databaseURL: "https://instructor-dp-ua.firebaseio.com",
  projectId: "instructor-dp-ua",
  storageBucket: "instructor-dp-ua.appspot.com",
  messagingSenderId: "1066323488008"
};

@NgModule({
  declarations: [
    AppComponent, InstructorListComponent, InstructorDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'instructors', component: InstructorListComponent },
      { path: 'instructors/:id', canActivate: [InstructorGuardService], component: InstructorDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [InstructorGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
