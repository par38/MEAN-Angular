import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { EmployeeModel } from '../app/models/employee.model'
// import { Employee } from '../app/models/employee.model'
import { EmployeeService} from '../app/services/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeModel,
    // Employee,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
