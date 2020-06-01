import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class AdminsecService implements CanActivate {

  constructor(private router: Router,private us: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(resolve => {
      this.us.user.subscribe(user => {
        if (user) resolve(true);
        else {
          this.router.navigate(['/login'])
          resolve(false)
        }
      })
    })
  }}
