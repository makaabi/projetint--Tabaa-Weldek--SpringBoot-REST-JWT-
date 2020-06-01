import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QcmService} from 'src/app/services/qcm.service';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {
  idqcm : string;
  qcm : Qcm;
  QCMs:Qcm[]=[];

    constructor(private activatedRoute : ActivatedRoute,private qs: QcmService) { }

  ngOnInit() {
    this.idqcm = this.activatedRoute.snapshot.params['id'];
    this.qs.getAllQCM().subscribe(
      data => {
        for(let j=0;j<data.length;j++){
         let questions =[];
  
          console.log(data[j].payload.doc.id)
          this.qs.getQuestions(data[j].payload.doc.id).subscribe(
            donnee=>{      
              questions=donnee  

              let qcm:Qcm=new Qcm( 
                data[j].payload.doc.id,
                data[j].payload.doc.data()['nom'],
                data[j].payload.doc.data()['matiere'],
                data[j].payload.doc.data()['enseignantid'],
                data[j].payload.doc.data()['dateqcm'],
                questions);
                this.QCMs.push(qcm) ;
                if(data[j].payload.doc.id==this.idqcm)
                {
                  this.qcm=qcm;
                  console.log(this.qcm)
                }
                
  console.log(questions)
            }
          )
          
         
          
        }
      });

  }

}
