import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forumensajoutpub',
  templateUrl: './forumensajoutpub.component.html',
  styleUrls: ['./forumensajoutpub.component.css']
})
export class ForumensajoutpubComponent implements OnInit {

  constructor(private us: UserService,private fs:ForumService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    this.fs.ajouterPulication(form.value['titre'],form.value['description']);
    this.router.navigate(['/forumens']); 
  }
}
