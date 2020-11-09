import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relation } from '../models/relation';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  URL_API = "http://localhost:3000/relations";

  selectedRelation: Relation = {
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
  } 
  relations: Relation[];
  employees: Employee[];


  constructor(private http: HttpClient) { }

  getRelations(){
    return this.http.get<Employee[]>(this.URL_API);
    
  }

  getAllRelations(){
    return this.http.get<Relation[]>(`${this.URL_API}/all`);
    
  }

  getRelation(_id: string){
    return this.http.get<Relation[]>(`${this.URL_API}/contractor/${_id}`);
    
  }

  createRelation(relation: Relation){
    
    return this.http.post(this.URL_API,relation,{responseType: 'text'});
  }

  updateRelation(relation: Relation){
    return this.http.put(`${this.URL_API}/${relation._id}`,relation,{responseType: 'text'})
  }

  deleteRelation(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`,{responseType: 'text'})
  }
}
