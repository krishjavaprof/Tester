import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, observable, Subject, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

const data = [
  {
  appointment_ID: 1,
  provider_ID: '3',
  patient_ID: '3',
  appointment_Date_Time: '2020-11-09T23:59:59',
  visit_Reason: 'Liver Cancer',
  patienT_RELATIONSHIP: 'sister',
  appointment_Status: 'pending',
  patientMail_ID: 'sarathpcp1@gmail.com',
  providerMail_ID: 'sarathpcp1@gmail.com',
  npi: 'nc'
},
{
  appointment_ID: 2,
  provider_ID: '2',
  patient_ID: '2',
  appointment_Date_Time: '2020-11-09T23:59:59',
  visit_Reason: 'npa',
  patienT_RELATIONSHIP: 'mother',
  appointment_Status: 'accept',
  patientMail_ID: 'sarathece143@gmail.com',
  providerMail_ID: 'sarathece143@gmail.com',
  npi: 'nb'
},
{
  appointment_ID: 3,
  provider_ID: '3',
  patient_ID: '3',
  appointment_Date_Time: '2020-11-09T23:59:59',
  visit_Reason: 'npa',
  patienT_RELATIONSHIP: 'sister',
  appointment_Status: 'accept',
  patientMail_ID: 'sarathpcp1@gmail.com',
  providerMail_ID: 'sarathpcp1@gmail.com',
  npi: 'nc'
},
{
  appointment_ID: 1,
  provider_ID: '4',
  patient_ID: '4',
  appointment_Date_Time: '2021-01-28T23:59:59',
  visit_Reason: 'Liver Cancer',
  patienT_RELATIONSHIP: 'sister',
  appointment_Status: 'modified',
  patientMail_ID: 'sarathpcp1@gmail.com',
  providerMail_ID: 'sarathpcp1@gmail.com',
  npi: 'nc'
},
];


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient ) { }

  getAppointments(): any{
    const observable = new Observable(observer => {
      setTimeout(() => {
          observer.next(data);
      }, 100);
});

return observable;
  }

  
}