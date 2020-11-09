import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contractor } from '../models/contractor'

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  URL_API = "http://localhost:3000/contractors";

  selectedContractor: Contractor = {
    'name': '',
    'lastname': '',
    'identification': null,
    'birthday': '',
    'address': '',
    'phone': '',
    'email': '',
    'company': ''
  } 
  contractors: Contractor[];


  constructor(private http: HttpClient) { }

  getContractors(){
    return this.http.get<Contractor[]>(this.URL_API);
    
  }

  createContractor(contractor: Contractor){
    
    return this.http.post(this.URL_API,contractor,{responseType: 'text'});
  }

  updateContractor(contractor: Contractor){
    return this.http.put(`${this.URL_API}/${contractor._id}`,contractor,{responseType: 'text'})
  }

  deleteContractor(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`,{responseType: 'text'})
  }
}
