import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const ELEMENT_DATA: any[] = [
  { appointmentId: 123478, patientName: 'sam', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'orange' },
  { appointmentId: 123478, patientName: 'john', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'green' },
  { appointmentId: 123478, patientName: 'peter', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'orange' },
  { appointmentId: 123478, patientName: 'david', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'green' },
  { appointmentId: 123478, patientName: 'joel', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'red' },
  { appointmentId: 123478, patientName: 'david', date: '12/12/2020 10:24AM', reason: 'check up Test', status: 'modified', action: '', code: 'green' }


];

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['Appointment ID', 'Patient Name', 'Date & Time', 'Reason for Visit', 'status', 'Action'];
  dataSource = ELEMENT_DATA;
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'providerName': [''],
      'date': [''],
      'status': ['']
    });
  }

  public onSubmit(): void {
    const pName = this.formGroup.controls.providerName.value;
    if (pName) {
      this.dataSource = ELEMENT_DATA.filter(data => data.patientName == pName);
    } else {
      this.dataSource = ELEMENT_DATA;
    }
  }

}




