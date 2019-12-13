import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { throwError } from 'rxjs'

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

  // ++++++++  FONCTIONNE
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

  // ++++++++  FONCTIONNE
  showEmployeesList() {
    this.employeeService.getEmployeesList().subscribe((res) => {
      this.employeeService.employeesList = res as EmployeeModel[]
    })
  }

  
  // onDelete(_id: string, form: NgForm) {
  //   this.employeeService.deleteEmployee(_id)
  //   // this.resetForm();
  //   // this.showEmployeesList()
  // }

  // TUTO
  // onDelete(_id: string, form: NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.employeeService.deleteEmployee(_id).subscribe((res) => {
  //       this.showEmployeesList();
  //       this.resetForm(form);
  //       // M.toast({ html: 'Deleted successfully', classes: 'rounded' });
  //     });
  //   }
  // }


  // onSubmit(formContent: NgForm) {
  //   this.employeeService.postEmployee(formContent.value)
  // }

  // TUTO
  // onSubmit(form: NgForm) {
  //   // if (form.value._id == "") {
  //   this.employeeService.postEmployee(form.value).subscribe(
  //     data => {
  //       this.showEmployeesList()
  //       return true
  //     },
  //     error => {
  //       console.error("Error saving new employee")
  //       return throwError(error)
  //     }
  //   )
  //   // }
  //   // else {
  //   //   this.employeeService.putEmployee(form.value).subscribe((res) => {
  //   //     this.resetForm(form);
  //   //     this.showEmployeesList();
  //   //     // M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //   //   });
  //   // }
  // }

}
