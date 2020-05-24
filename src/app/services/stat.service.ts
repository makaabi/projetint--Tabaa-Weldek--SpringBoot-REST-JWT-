import { Injectable } from '@angular/core';
import {Statistique} from 'src/app/interfaces/Statistique';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private fs: AngularFirestore,private router: Router) { }
}
