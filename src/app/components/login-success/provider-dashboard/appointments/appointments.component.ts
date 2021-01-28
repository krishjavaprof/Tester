import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../../../services/appointment.service';
import * as moment from 'moment';


@Component({
  selector: 'app-provider-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  private appointmentList;
  dataSource;
  formGroup: FormGroup;
  public pastAppointment = false;
  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentService) { }

  public ngOnInit() {
    this.createForm();
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointmentList = data;
      this.dataSource = data;
    })

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'providerName': [''],
      'date': [''],
      'status': ['']
    });
  }

  public doSearch(): void {
    const pName = this.formGroup.controls.providerName.value;
    const status = this.formGroup.controls.status.value;
    const date = this.formGroup.controls.date.value;
    let list: any[] = this.appointmentList;
    if (status) {
      list = list.filter(element => element.appointment_Status === status);
    }
    if (date) {
      list = list.filter(element => {
        const selectedDate = moment(date).format('DD/MM/yyyy');
        const elementDate = moment(element.appointment_Date_Time).format('DD/MM/yyyy');
        if (elementDate === selectedDate) {
          return element;
        }

      });
    }  
    if (this.pastAppointment) {
      list = list.filter(element => {
        const selectedDate = moment().format('DD/MM/yyyy');
        const elementDate = moment(element.appointment_Date_Time).format('DD/MM/yyyy');
        if (elementDate !== selectedDate) {
          return element;
        }

      });
    } 
    
    this.dataSource = list;
  }

  public actionCompleted(element: any, index: number) {
    this.dataSource[index] = element;
  }

  public pastAppiontmentChange(event) {
    this.pastAppointment = !this.pastAppointment;
    this.doSearch();
  } 

}




