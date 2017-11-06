import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { User } from './user';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user$ = this.afAuth.authState;
    console.log(this.user$);

    this.afAuth.authState
      .switchMap(auth => {
        if (auth) {
          /// signed in
          return this.db.object('users/' + auth.uid);
        } else {
          /// not signed in
          return Observable.of(null);
        }
      })
      .subscribe(user => {
        this.user.next(user);
        console.log(this.user);
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {

        this.updateUser(credential.user);

        console.log('Login Google - success');
        this.router.navigate(['/instructors']);
      })
      .catch(error => console.log('auth error ', error));
  }



  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/welcome']);
  }

  //// Update user data ////
  /// updates database with user info after login
  /// only runs if user role is not already defined in database
  private updateUser(authData) {
    const userData = new User(authData);
    const ref = this.db.object('users/' + authData.uid);
    ref.take(1)
      .subscribe(user => {
        console.log(user.roles)
        if (!user.roles) {
          ref.update(userData)
        }
      });
  }

}
