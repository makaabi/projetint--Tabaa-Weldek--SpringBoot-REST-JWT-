import { Injectable } from '@angular/core';
import {AuthenService} from 'src/app/services/authen.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>

  constructor(private router: Router,private aus:AuthenService,private fs: AngularFirestore,private af: AngularFireAuth)
   { 
    this.user = af.user

   }

  addUser(id, name, email,type){
    return this.fs.doc('users/' + id).set({
      id,
      name,
      email,
      type
    })
  }

  getAllUsers(){
    return this.fs.collection('users').valueChanges()

  }

  userneeded(id:string,users):any{
    let obj:any=null;
    for(let u of users)
      if (id==u.id)
      obj=u;
    return obj;

  }

  

  redirect(typeu:string){
        if(typeu=="etudiant")
          this.router.navigate(['/etudiant']);
        else if (typeu=="enseignant")
          this.router.navigate(['/enseignant']);
        else 
          this.router.navigate(['/admin']);
  }
}
