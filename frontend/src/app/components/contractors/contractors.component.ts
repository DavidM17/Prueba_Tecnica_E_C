import { Component, OnInit } from '@angular/core';
import { ContractorService } from '../../services/contractor.service';
import { NgForm } from '@angular/forms'
import { Contractor } from 'src/app/models/contractor';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  constructor(public contractorService: ContractorService) { }

  value_hide = false;
  selectedContractor: Contractor = {
    'name': '',
    'lastname': '',
    'identification': 0,
    'birthday': '',
    'address': '',
    'phone': '',
    'email': '',
    'company': ''
  }

  ngOnInit(): void {
    this.getContractors();
  }

  changeview(value: boolean){
    this.value_hide = value;
  }

  getContractors(){
    this.contractorService.getContractors().subscribe(
      res => {
        this.contractorService.contractors = res;
        console.log(res)
      },
      err => console.log(err)
    )

  }


  addContractor(form: NgForm){
    if(form.value._id){
      this.contractorService.updateContractor(form.value).subscribe(
        res => {
          this.getContractors();
          form.reset()
        },
        err => console.log(err)
      )
    }else{
      this.contractorService.createContractor(form.value).subscribe(
        res => {
          this.getContractors();
          form.reset()
        },
        err => console.log(err)
      )
    }

  }

  deleteContractor(id: string){
    if(confirm('¿Desea eliminar el contratista?')){
      this.contractorService.deleteContractor(id)
      .subscribe(
        res => {
          this.getContractors();
          console.log(res)
        },
        err => console.log(err)
      )
    }
  }

  editContractor(contractor : Contractor){
    this.contractorService.selectedContractor = contractor;
  }

  addEmployee(contractor: Contractor){

    this.selectedContractor = contractor;
    this.value_hide = true;

  }

  

}
