import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {Document} from 'src/app/interfaces/Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private fs: AngularFirestore,private str: AngularFireStorage) { }
  getAllDocuments(){
    return this.fs.collection('Documents').snapshotChanges();

  }
  addDocument(name:string,ensid:string,institut:string,branch:string,matiere:string,typed:string,fichier:File,dated:Date){
    return new Promise((resolve) => {
      let ref = this.str.ref('Documents/' + fichier.name)
      ref.put(fichier).then(() => {
        ref.getDownloadURL().subscribe(lien => {
          this.fs.collection('Documents').add({
            name,
            ensid,
            institut,
            branch,
            matiere,
            typed,
            dated,
            lien
          }).then(() => resolve(console.log('mchet')))
        })
      })
    })

  }

  deleteDocument(id:string, documents:Document[]):Document[]
  {
      let i:number
      for(i=0;i<documents.length;i++)
      {
        if(id==documents[i].id)
        documents.splice(i,1);

      }

     this.fs.doc(`Documents/${id}`).delete();

      return documents;
  }
}
