import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable, forkJoin } from 'rxjs'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { EmployeeModel } from '../models/employee.model'

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
  
export class EmployeeService {

  // create a selectedEmployee from the model to use with a form
  selectedEmployee: EmployeeModel;
  // selectedEmployee: Employee;


  // create an array of employees
  employeesList: EmployeeModel[];
  // employees: Employee[];


  // http node's server
  readonly httpNodeCRUD='http://localhost:3003/employees'


  constructor(private http: HttpClient) { }
  

  // +++++++  FONCTIONNE
  getEmployeesList() {
    // return forkJoin(
    //   this.http.get(this.httpNodeCRUD)
    // )
    return this.http.get(this.httpNodeCRUD)
  }


  // postEmployee(emp: EmployeeModel) {
  //   return forkJoin(
  //   this.http.post(
  //     this.httpNodeCRUD + `/add`,
  //     emp
  //     )
  //   )
  // }

  // postEmployee(emp: EmployeeModel) {
  //   this.http.post(
  //     this.httpNodeCRUD + `/add`,
  //     emp
  //     )
  // }

  

  // putEmployee(emp: EmployeeModel) {
    // putEmployee(emp: Employee) {

  //   return this.http.put(
  //     this.httpNodeCRUD + `/modifier/${_id}`,
  //     emp
  //   )
  // }

  // deleteEmployee(_id: string) {
  //   // return forkJoin(
  //   //   this.http.delete(this.httpNodeCRUD + `/supprimer/${_id}`
  //   //   )
  //   // )
  //   return this.http.delete(this.httpNodeCRUD + `/supprimer/${_id}`)
  // }

}
