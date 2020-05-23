import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeadm',
  templateUrl: './homeadm.component.html',
  styleUrls: ['./homeadm.component.css']
})
export class HomeadmComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.user.subscribe(user => console.log(user.displayName))
  }

}
