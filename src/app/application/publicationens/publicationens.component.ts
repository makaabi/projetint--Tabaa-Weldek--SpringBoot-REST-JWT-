import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';

@Component({
  selector: 'app-publicationens',
  templateUrl: './publicationens.component.html',
  styleUrls: ['./publicationens.component.css']
})
export class PublicationensComponent implements OnInit {
  idp : string;
  pub : Publication;
  publications : Publication[];

  constructor(private activatedRoute : ActivatedRoute,private fs:ForumService) { }

  ngOnInit() {
    this.fs.getAllPub().subscribe(
      data => {
       
        this.publications = data.map(
          element =>
          new Publication( 
            element.payload.doc.id,element.payload.doc.data()['titre'],element.payload.doc.data()['description'],
            element.payload.doc.data()['ownerid'],null)
            
          )
      })
      this.idp = this.activatedRoute.snapshot.params['id'];
    this.pub = this.fs.chercherPublication(this.idp,this.publications);
    
    
  }
 
}