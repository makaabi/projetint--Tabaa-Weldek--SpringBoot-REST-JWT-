import { Component, OnInit } from '@angular/core';
import {Document} from 'src/app/interfaces/Document';
import {DocumentService} from 'src/app/services/document.service';
import { UserService } from 'src/app/services/user.service';
import { Branche } from 'src/app/interfaces/Branche';
import { Matiere } from 'src/app/interfaces/Matiere';
import { Nom } from 'src/app/interfaces/Nom';
import {Institut} from 'src/app/interfaces/Institut';
@Component({
  selector: 'app-documentadm',
  templateUrl: './documentadm.component.html',
  styleUrls: ['./documentadm.component.css']
})
export class DocumentadmComponent implements OnInit {

  Documents:Document[];
  branche : boolean = false;
  matiere : boolean = false;
  nomm : boolean = false;
  instituts : Institut[] = [];


  constructor(private ds:DocumentService,private us: UserService) { }

  ngOnInit() {

    this.ds.getAllDocuments().subscribe(
      data => {
        this.Documents = data.map(
          element =>new Document( 
            element.payload.doc.id,
            element.payload.doc.data()['name'],
            element.payload.doc.data()['ensid'],
            element.payload.doc.data()['institut'],
            element.payload.doc.data()['branch'],
            element.payload.doc.data()['matiere'],
            element.payload.doc.data()['typed'],
            element.payload.doc.data()['dated'],
            element.payload.doc.data()['lien'],
            )
          )
          this.insert();
      })
  }
  insert(){
    if(this.Documents.length!=0){
      let a : Document = this.Documents[0];
      this.instituts.push(new Institut(a.id,a.institut,[new Branche(a.branch,[new Matiere(a.matiere,[new Nom(a.nom,a.lien)])])]));
      let insExist : boolean = false;
      let matExist : boolean = false;
      let branExist : boolean = false;
      let nomExist : boolean = false;
      for(let z=1;z<this.Documents.length;z++){
        let i : Document = this.Documents[z];
        console.log(i);
        
        for(let w=0;w<this.instituts.length;w++){
          let y : Institut = this.instituts[w];
          if(i.institut === y.institut){
            insExist = true;
            for(let b of y.branches){
              if(i.branch === b.branche){
                branExist = true;
                for(let m of b.matieres){
                  if(i.matiere === m.matiere){
                    matExist = true;
                    for(let n of m.noms){
                      if(i.nom === n.nom){
                        nomExist = true;
                      }
                    }
                    if(insExist&&branExist&&matExist&&!nomExist)m.noms.push(new Nom(i.nom,i.lien));
                  }
                }
                if(insExist&&branExist&&!matExist)b.matieres.push(new Matiere(i.matiere,[new Nom(i.nom,i.lien)]));
              }
            }
            if(insExist&&!branExist)y.branches.push(new Branche(i.branch,[new Matiere(i.matiere,[new Nom(i.nom,i.lien)])]));
          }
        }
        if(!insExist)this.instituts.push(new Institut(i.id,i.institut,[new Branche(i.branch,[new Matiere(i.matiere,[new Nom(i.nom,i.lien)])])]));
      }
    }
  }

  onclickInstitut(){
    this.branche = !this.branche;
    this.matiere = false;
    this.nomm = false;
    console.log(this.instituts);
  }
  onclickBranche(){
    this.matiere = !this.matiere;
    this.nomm = false;
  }
  onclickMatiere(){
    this.nomm = !this.nomm;
  }
}