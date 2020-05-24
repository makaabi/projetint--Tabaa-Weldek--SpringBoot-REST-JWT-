import { Component, OnInit } from '@angular/core';
import {StatService} from 'src/app/services/stat.service';

@Component({
  selector: 'app-adminstat',
  templateUrl: './adminstat.component.html',
  styleUrls: ['./adminstat.component.css']
})
export class AdminstatComponent implements OnInit {

  constructor(private st:StatService) { }

  ngOnInit() {
  }

}
