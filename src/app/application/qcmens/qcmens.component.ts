import { Component, OnInit } from '@angular/core';
import {QcmService} from 'src/app/services/qcm.service';

@Component({
  selector: 'app-qcmens',
  templateUrl: './qcmens.component.html',
  styleUrls: ['./qcmens.component.css']
})
export class QcmensComponent implements OnInit {
  tab;

  constructor(private qs:QcmService) { }

  ngOnInit() {
    this.tab=this.qs.tab;

  }

}
