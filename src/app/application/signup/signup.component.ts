import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenService} from 'src/app/services/authen.service';
import {User} from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  erreur:string='';
  constructor(private router: Router,private aus:AuthenService) { }

  ngOnInit() {
  }

  signup(form) {
    let data:User=form.value;
    this.aus.signup(data.email,data.password)
    .then(() =>this.router.navigate(['/login']))
    .catch(err => this.erreur = err.message)



    

  }

}
