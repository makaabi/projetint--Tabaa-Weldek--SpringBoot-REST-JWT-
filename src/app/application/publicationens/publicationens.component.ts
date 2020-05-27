import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ForumService} from 'src/app/services/forum.service';


import {Publication} from 'src/app/interfaces/Publication';
@Component({
  selector: 'app-publicationens',
  templateUrl: './publicationens.component.html',
  styleUrls: ['./publicationens.component.css']
})
export class PublicationensComponent implements OnInit {
  idp : number;
  pub : Publication;
  constructor(private activatedRoute : ActivatedRoute,private fs:ForumService) { }

  ngOnInit() {
    this.idp = this.activatedRoute.snapshot.params['id'];
    this.pub = this.fs.chercherPublication(this.idp);
  }

}
