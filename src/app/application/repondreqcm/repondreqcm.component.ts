import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {QcmService} from 'src/app/services/qcm.service';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
@Component({
  selector: 'app-repondreqcm',
  templateUrl: './repondreqcm.component.html',
  styleUrls: ['./repondreqcm.component.css']
})
export class RepondreqcmComponent implements OnInit {
  idqcm : string;
  qcm : Qcm;
  QCMs:Qcm[]=[];
  reponses:string[]=[];
  score:number=0;
  show:boolean=false;

    constructor(private activatedRoute : ActivatedRoute,private qs: QcmService) { }

  ngOnInit() {
    this.idqcm = this.activatedRoute.snapshot.params['id'];
    this.qs.getAllQCM().subscribe(
      data => {
        for(let j=0;j<data.length;j++){
         let questions : Question[]=[];
            this.qs.getQuestions(data[j].payload.doc.id).subscribe(
            donnee=>{      
              questions= donnee.map(
                qs=>
                new Question(qs.payload.doc.id,
                  qs.payload.doc.data()['question'],
                  qs.payload.doc.data()['reponse'],
                  qs.payload.doc.data()['a'],
                  qs.payload.doc.data()['b'],
                  qs.payload.doc.data()['c'])
              )
              let qcm:Qcm=new Qcm( 
                data[j].payload.doc.id,
                data[j].payload.doc.data()['nom'],
                data[j].payload.doc.data()['matiere'],
                data[j].payload.doc.data()['enseignantid'],
                data[j].payload.doc.data()['dateqcm'],
                questions);
                this.QCMs.push(qcm) ;
                console.log(this.QCMs);
                if(data[j].payload.doc.id==this.idqcm)
                {
                  this.qcm=qcm;
                }
                
  
            }
          )
          
         
          
        }
      });

  }
  calScore(){
    this.show=true;
    this.score=0;
    console.log(this.qcm.questions,this.reponses)

    for(let i:number=0;i<this.qcm.questions.length;i++){
      if(this.qcm.questions[i].reponse==this.reponses[i])
      {
        console.log(this.qcm.questions[i].reponse,this.reponses[i])
        this.score++;

      }

    }

  }
}
