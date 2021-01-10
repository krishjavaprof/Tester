import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: any[] = [
  {appointmentId: 123478, patientName: 'Sam', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '',code: 'orange'},
  {appointmentId: 123478, patientName: 'Sam', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'green'},
  {appointmentId: 123478, patientName: 'Sam', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'orange'},
  {appointmentId: 123478, patientName: 'Sam', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'green'}
];

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['Appointment ID', 'Patient Name', 'Date & Time', 'Reason for Visit', 'status', 'Action'];
  dataSource = ELEMENT_DATA; 
    constructor(){}

    public ngOnInit() {
                    
    }
  

}


 
   
