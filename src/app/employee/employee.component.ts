import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

// to have access to the selectedEmployee
import { EmployeeService } from '../services/employee.service'
import {EmployeeModel } from '../models/employee.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'], 
  providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.resetForm();
    this.showEmployeesList()
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }   
  }

  showEmployeesList() {
    this.employeeService.getEmployeesList().subscribe((res) => {
      this.employeeService.employeesList = res as EmployeeModel[]
    })
  }

}
