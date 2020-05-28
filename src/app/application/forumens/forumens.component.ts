import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';

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

      this.fs.getAllPub().snapshotChanges().subscribe(
        data => {
          data.map(element=>console.log(element.payload.doc.metadata))
          this.publications = data.map(
            element =>new Publication( 
              element.payload.doc.id,element.payload.doc.data()['titre'],element.payload.doc.data()['description'],
              element.payload.doc.data()['ownerid'], 
              null
              )
            )
        })
    }
  
 
}
