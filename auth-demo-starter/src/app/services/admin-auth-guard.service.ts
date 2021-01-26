import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(){
    //iremos saber se o User é admin
    let user = this.authService.currentUser;
    if (user && user.admin) {
          return true;
    }else {
      this.router.navigate(['/no-access']);
      return false;
    }

  }

}
