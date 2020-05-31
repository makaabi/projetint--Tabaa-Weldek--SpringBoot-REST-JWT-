import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Document} from 'src/app/interfaces/Document';
import { Router } from '@angular/router';
import {DocumentService} from 'src/app/services/document.service';

import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-ajouterdocument',
  templateUrl: './ajouterdocument.component.html',
  styleUrls: ['./ajouterdocument.component.css']
})
export class AjouterdocumentComponent implements OnInit {
  @ViewChild('file',{static:false}) file: ElementRef;
  typed:string="TP";
  currentensid:string;
  Users:User[];



  constructor(private ds:DocumentService,private us: UserService,private router: Router) { }
  addDocument(form:NgForm) 
  {
      let name=(<Document>form.value).nom;
      let institut=(<Document>form.value).institut;
      let branch=(<Document>form.value).branch;
      let matiere=(<Document>form.value).institut;

      let file = (<HTMLInputElement>this.file.nativeElement).files[0];
      let dated=new Date()

      this.ds.addDocument(name,this.currentensid,institut,branch,matiere,this.typed,file,dated);


      this.router.navigate(['/documentsens']);
  }



  ngOnInit() {
    this.us.user.subscribe(user => this.currentensid=user.uid);
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

}
