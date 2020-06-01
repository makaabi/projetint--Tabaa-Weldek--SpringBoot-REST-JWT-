import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class EtudiantsecService implements CanActivate {

  constructor(private router: Router,private us: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(resolve => {
      this.us.getAllUsersdata().subscribe(
        data=>{
          let users=[]
          users=data
          this.us.user.subscribe(user => {
            console.log(users)
            if (user && this.us.userType(user.uid,users)=="etudiant") 
            resolve(true);
            else 
              resolve(false)
            
          })


        }

      )
    
    })
  }
}
