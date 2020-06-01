import { Injectable } from '@angular/core';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  tab:any[]

  constructor(private fs: AngularFirestore) { }
  getAllQCM(){
    return this.fs.collection('Qcms').snapshotChanges();

  }
  getQuestions(id:string){
    return this.fs.collection('Qcms').doc(id).collection('Questions').valueChanges();
  }
  
  CreerQCm(nom:string,matiere:string,enseignantid:string,dateqcm:Date){

    this.fs.collection('Qcms').add({
      nom,
      matiere,
      enseignantid,
      dateqcm
    })
  }
  ajouterQuestion(idqcm : string,question : string,reponse:string,a:string,b:string,c:string){
    this.fs.collection('Qcms/'+idqcm+'/Questions').add({
      question,
      reponse,
      a,
      b,
      c
      
    }

    )

  }
}
