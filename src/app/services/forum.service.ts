import { Injectable } from '@angular/core';

import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class ForumService {
  constructor(private fs: AngularFirestore) { }

  tabPublication : Publication[] ;
  publications : Publication[];


  getAllPub(){
    return this.fs.collection('Publications').snapshotChanges();

  }
  getCmnts(id:string){
    return this.fs.collection('Publications').doc(id).collection('Commentaires').snapshotChanges();
  }
  

  chercherPublication(id:string,tabPublication:Publication[]):Publication{
    for(let i = 0;i<tabPublication.length;i++){
      if(tabPublication[i].idp == id){
        return tabPublication[i];
      }
    }
    return null;
  }

  ajouterPulication(titre:string,description:string,ownerid:string){

    this.fs.collection('Publications').add({
      titre,
      description,
      ownerid
    })
  }

  ajouterCommentaire(idp : string,description : string,ownerid:string){
    this.fs.collection('Publications/'+idp+'/Commentaires').add({
        description,
        ownerid
      
    }

    )

  }
}