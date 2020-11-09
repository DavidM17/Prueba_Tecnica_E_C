import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {



  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.log(err)
    )

  }

  

  addEmployee(form: NgForm){
    
    if(form.value._id){
      this.employeeService.updateEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset()
        },
        err => console.log(err)
      )
    }else{
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset()
        },
        err => console.log(err)
      )
    }

  }

  deleteEmployee(id: string){
    if(confirm('¿Desea eliminar el empleado?')){
      this.employeeService.deleteEmployee(id)
      .subscribe(
        res => {
          this.getEmployees();
          console.log(res)
        },
        err => console.log(err)
      )
    }
  }

  editEmployee(employee : Employee){
    this.employeeService.selectedEmployee = employee;
  }

  

}
