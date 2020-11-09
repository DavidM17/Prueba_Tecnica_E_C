import { Component, OnInit } from '@angular/core';
import { RelationService } from '../../services/relation.service';
import { Relation } from 'src/app/models/relation';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public relationService: RelationService) { }

  relations: Relation[];

  ngOnInit(): void {
    this.getRelations()
  }

  getRelations(){
    this.relationService.getAllRelations().subscribe(
      res => this.relations = res,
      err => console.log(err)
    )
  }

  sum(a,b){
    return Number(a) - Number(b);
  }

}
