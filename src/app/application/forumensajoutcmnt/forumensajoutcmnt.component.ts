import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import {ForumService} from 'src/app/services/forum.service';
@Component({
  selector: 'app-forumensajoutcmnt',
  templateUrl: './forumensajoutcmnt.component.html',
  styleUrls: ['./forumensajoutcmnt.component.css']
})
export class ForumensajoutcmntComponent implements OnInit {
  idp : string;
 
  constructor(private activatedRoute : ActivatedRoute,private fs:ForumService,private router:Router) { }

  ngOnInit() {
    this.idp = this.activatedRoute.snapshot.params['id'];

  }
  onSubmit(form:NgForm){
    this.fs.ajouterCommentaire('1',this.idp,form.value['description'],'exp');
    this.router.navigate(['/forumens']); 

  }
}
