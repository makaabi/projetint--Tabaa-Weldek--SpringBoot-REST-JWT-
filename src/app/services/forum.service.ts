import { Injectable } from '@angular/core';

import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class ForumService {
  constructor(private fs: AngularFirestore) { }

  publications : Publication[];


  getAllPub(){
    return this.fs.collection('Publications').snapshotChanges();

  }
  getCmnts(id:string){
    return this.fs.collection('Publications').doc(id).collection('Commentaires').snapshotChanges();
  }
  

 

  ajouterPulication(titre:string,description:string,ownerid:string,datep:Date){

    this.fs.collection('Publications').add({
      titre,
      description,
      ownerid,
      datep
    })
  }

  ajouterCommentaire(idp : string,description : string,ownerid:string,datec:Date){
    this.fs.collection('Publications/'+idp+'/Commentaires').add({
        description,
        ownerid,
        datec
      
    }

    )

  }
}