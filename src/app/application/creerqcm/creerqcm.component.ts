import { Component, OnInit } from '@angular/core';
import {QcmService} from 'src/app/services/qcm.service';

@Component({
  selector: 'app-creerqcm',
  templateUrl: './creerqcm.component.html',
  styleUrls: ['./creerqcm.component.css']
})
export class CreerqcmComponent implements OnInit {

  constructor(private qs:QcmService) { }

  ngOnInit() {
  }

}
