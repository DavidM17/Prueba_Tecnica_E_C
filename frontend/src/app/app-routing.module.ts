import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { ReportComponent } from './components/report/report.component';
import { RelationComponent } from './components/relation/relation.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'contractors',
    component: ContractorsComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
