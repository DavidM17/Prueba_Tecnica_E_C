import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ReportComponent } from './components/report/report.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { RelationComponent } from './components/relation/relation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeesComponent,
    ReportComponent,
    ContractorsComponent,
    RelationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
