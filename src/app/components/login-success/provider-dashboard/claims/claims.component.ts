import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const ELEMENT_DATA: any[] = [
  { appointmentId: 9876548, patientName: 'Test', date: '01/03/2021', claimId: '123467'},
  { appointmentId: 98745673, patientName: 'Test 12', date: '12/03/2018', claimId: '4456'},
  { appointmentId: 123562, patientName: 'Test 344', date: '12/09/2021', claimId: '2334'},
  { appointmentId: 986548, patientName: '123 Test', date: '12/01/2021', claimId: '123467'},
  { appointmentId: 2345633, patientName: 'Test', date: '12/12/2020', claimId: '4565'},
  { appointmentId: 9873636, patientName: 'Test', date: '01/01/2021', claimId: '787'},
  { appointmentId: 1234656, patientName: 'Test', date: '09/12/2021', claimId: '12346'},
  { appointmentId: 8762250, patientName: 'Test', date: '12/12/2021', claimId: '971255'},

];



@Component({
  selector: 'app-provider-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  public dataSource = ELEMENT_DATA;
  public formGroup: FormGroup;
  public createNewClaim = false;
  public submittedClaimsActive = false;
  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    
  }  

}


 
   
