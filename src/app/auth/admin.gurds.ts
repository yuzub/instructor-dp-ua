import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user
      .take(1)
      .map(user => user.roles.admin || user.roles.moderator)
      .do(authorized => {
        if (!authorized) {
          alert('Access only for moderator and admin.');
        }
      });
  }
}
