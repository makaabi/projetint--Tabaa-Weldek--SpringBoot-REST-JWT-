import { Component, OnInit, } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {User} from 'src/app/interfaces/user.interface';



@Component({
  selector: 'app-homeadm',
  templateUrl: './homeadm.component.html',
  styleUrls: ['./homeadm.component.css']
})
export class HomeadmComponent implements OnInit {

  currentadminid:string;

  Users:User[];

  constructor(private us: UserService) {

   }

  ngOnInit() {
    this.us.user.subscribe(user => this.currentadminid=user.uid)
   this.us.getAllUsers().subscribe(
      data => {
        this.Users = data.map(
          element => {
          return {
            id: element.payload.doc.id,
            name:element.payload.doc.data()['name'],
            type:element.payload.doc.data()['type'],
            email:element.payload.doc.data()['email'],
            
          }
        })
      })
      
     }

    getadminName(){
      let fullname:string=this.us.userneeded(this.currentadminid,this.Users).name;
      
      return fullname.substring(0,fullname.indexOf(' '));
    }



}
