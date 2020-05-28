import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';


@Component({
  selector: 'app-forumens',
  templateUrl: './forumens.component.html',
  styleUrls: ['./forumens.component.css']
})
export class ForumensComponent implements OnInit {
  publications : Publication[];
  recherche : string;
  constructor(private us: UserService,private fs:ForumService) { }

 
    ngOnInit() {
      this.fs.getAllPub().subscribe(
        
        data => {
          
          let cmnts:Commentaire[]=null;

          data.map(element=>{
            console.log(element.payload.doc.id)
            this.fs.getCmnts(element.payload.doc.id).subscribe(
              donnee=>{
                
                cmnts= donnee.map(
                  cmnt=>new Commentaire(cmnt.payload.doc.id,cmnt.payload.doc.data()['description'],cmnt.payload.doc.data()['ownerid'])

                )
                console.log('cmnt',cmnts)
              }

            )
          }
            
            )
          this.publications = data.map(
            element =>new Publication( 
              element.payload.doc.id,element.payload.doc.data()['titre'],element.payload.doc.data()['description'],
              element.payload.doc.data()['ownerid'], cmnts)
            )
        })
    }
  test(){
    console.log(this.publications)
  }
 
}
