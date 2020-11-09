import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RelationService } from '../../services/relation.service';
import { NgForm } from '@angular/forms'
import { Relation } from 'src/app/models/relation';
import { Employee } from 'src/app/models/employee';
import { Contractor } from 'src/app/models/contractor'



@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {
  @Input() contractor: Contractor 
  @Output() viewchanged: EventEmitter<boolean> = new EventEmitter();

  constructor(public relationService: RelationService) { }

  selectedEmployee: Employee = {
    'name': '',
    'lastname': '',
    'identification': 0,
    'contract_type': '',
    'birthday': '',
    'address': '',
    'phone': '',
    'email': ''
  } 


  ngOnInit(): void {
    this.getRelations();
    this.getRelationContractor(this.contractor._id);
  }

  hideView(){
    this.viewchanged.emit(false);

  }

  getRelations(){
    this.relationService.getRelations().subscribe(
      res => {
        this.relationService.employees = res;
      },
      err => console.log(err)
    )

  }

  getRelationContractor(id: string){
    this.relationService.getRelation(id).subscribe(
      res => {
        this.relationService.relations = res;
      },
      err => console.log(err)
    )

  }

  addRelation(form: NgForm){
    if(form.value.employee_id){
      form.value._id = this.relationService.selectedRelation._id;
      form.value.contractor_id = this.relationService.selectedRelation.contractor_id;
      form.value.employee_id = this.relationService.selectedRelation.employee_id;
      form.value.contractor = this.contractor.name + ' ' + this.contractor.lastname;
      form.value.employee = this.relationService.selectedRelation.employee;
      form.value.identification = this.relationService.selectedRelation.identification;
      form.value.contract_type = this.relationService.selectedRelation.contract_type

      this.relationService.updateRelation(form.value).subscribe(
        res => {
          this.getRelationContractor(this.contractor._id);
          
        },
        err => console.log(err)
      )
    }else{
      form.value.contractor_id = this.contractor._id;
      form.value.employee_id = this.selectedEmployee._id;
      form.value.contractor = this.contractor.name + ' ' + this.contractor.lastname;
      form.value.employee = this.selectedEmployee.name + ' ' + this.selectedEmployee.lastname;
      form.value.identification = this.selectedEmployee.identification;
      form.value.contract_type = this.selectedEmployee.contract_type;

      this.relationService.createRelation(form.value).subscribe(
        res => {
          this.getRelationContractor(this.contractor._id);
          this.getRelations();
          
          
        },
        err => console.log(err)
      )
    }
    
  }

  deleteRelation(id: string){
    if(confirm('¿Desea eliminar la asignación?')){
      this.relationService.deleteRelation(id)
      .subscribe(
        res => {
          this.getRelationContractor(this.contractor._id);
          this.getRelations();
          console.log(res)
        },
        err => console.log(err)
      )
    }
  }

  addEmployee(employee: Employee){
    this.relationService.selectedRelation = {
    'contractor_id': '',
    'employee_id': '',
    'contractor': '',
    'employee': '',
    'identification': null,
    'contract_type': '',
    'worked_time': null,
    'working_time': null,
    'work_name': '',
    'start': ''
  } ;
    this.selectedEmployee = employee;

  }

  editRelation(relation: Relation){
    this.relationService.selectedRelation = relation;
    

  }
  

}
