import { Injectable } from '@angular/core';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  tab:any[]

  constructor(private fs: AngularFirestore) { }
}
