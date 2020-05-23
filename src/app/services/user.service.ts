import { Injectable } from '@angular/core';
import {AuthenService} from 'src/app/services/authen.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router,private aus:AuthenService,private fs: AngularFirestore) { }

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
  redirect(id:string,users){
    for(let u of users){
      if (id==u.id)
      {
        if(u.type=="etudiant")
          this.router.navigate(['/etudiant']);
        else if (u.type=="enseignant")
          this.router.navigate(['/enseignant']);
        else
          this.router.navigate(['/admin']);

      }
    }
  }
}
