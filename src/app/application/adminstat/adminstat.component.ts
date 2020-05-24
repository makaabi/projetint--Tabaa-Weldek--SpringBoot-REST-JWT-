import { Component, OnInit } from '@angular/core';
import {StatService} from 'src/app/services/stat.service';
import {Statistique} from 'src/app/interfaces/Statistique';


@Component({
  selector: 'app-adminstat',
  templateUrl: './adminstat.component.html',
  styleUrls: ['./adminstat.component.css']
})
export class AdminstatComponent implements OnInit {
  Statistiques:Statistique[];

  constructor(private st:StatService) { }

  ngOnInit() {
    this.st.getAllStats().subscribe(
      data => {
        this.Statistiques = data.map(
          element => {
          return {
            id: element.payload.doc.id,
            name:element.payload.doc.data()['name'],
            lien:element.payload.doc.data()['lien']
          }
        })
      })
  }

}
