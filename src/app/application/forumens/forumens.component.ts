import { Component, OnInit, NgZone } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';


@Component({
  selector: 'app-forumens',
  templateUrl: './forumens.component.html',
  styleUrls: ['./forumens.component.css']
})
export class ForumensComponent implements OnInit{
  publications : Publication[];
  commentaires : Commentaire[];


  recherche : string;
  constructor(private us: UserService,private fs:ForumService,private ngZone: NgZone) { }
 
  ngOnInit()	{
  this.fs.getAllPub().subscribe(
    data => {
     
      this.publications = data.map(
        element =>
        new Publication( 
          element.payload.doc.id,element.payload.doc.data()['titre'],element.payload.doc.data()['description'],
          element.payload.doc.data()['ownerid'],null)
          
        )
    })
    
    }
    ngDoCheck (){
        for(let i=0;i<this.publications.length;i++){
          this.fs.getCmnts(this.publications[i].idp).subscribe(
            donnee=>{      
             this.commentaires= donnee.map(
                cmnt=>
                new Commentaire(cmnt.payload.doc.id,cmnt.payload.doc.data()['description'],cmnt.payload.doc.data()['ownerid'])
              )
      
            }
          )
          this.publications[i].commentaires= this.commentaires
  
        }

      
      

    }

    
 

}
