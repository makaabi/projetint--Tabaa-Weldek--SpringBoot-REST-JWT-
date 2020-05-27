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
    this.publications = this.fs.tabPublication;

  }
 
}
