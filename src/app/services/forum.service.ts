import { Injectable } from '@angular/core';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  idp : number = 0;
  idc : number = 0;
  tabPublication : Publication[] = [
        new Publication(this.idp++,'1Titre','Premier Publication',[new Commentaire(this.idc++,'Premier Commentaire')]),
        new Publication(this.idp++,'2Titre','Deuxieme Publication',[new Commentaire(this.idc++,'Premier Commentaire'),
                                                           new Commentaire(this.idc++,'Deuxieme Commentaire'),
                                                           new Commentaire(this.idc++,'Troixieme Commentaire')]),
        new Publication(this.idp++,'3Titre','Troixieme Publication',[new Commentaire(this.idc++,'Premier Commentaire'),
                                                            new Commentaire(this.idc++,'Deuxieme Commentaire')]),
      ];

  
  chercherPublication(id:number):Publication{
    for(let i = 0;i<this.tabPublication.length;i++){
      if(this.tabPublication[i].idp == id){
        return this.tabPublication[i];
      }
    }
    return null;
  }

  ajouterPulication(titre:string,description:string){
    let commentaires : Commentaire[] = [];
    this.tabPublication.push(new Publication(this.idp++,titre,description,commentaires));
  }

  ajouterCommentaire(idp : number,description : string){
    let commentaires : Commentaire[] = this.chercherPublication(idp).commentaires;
    commentaires.push(new Commentaire(this.idc++,description));
  }
  constructor() { }
}
