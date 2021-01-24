import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddLineItemComponent } from './add-line-item/add-line-item.component';

@Component({
  selector: 'app-clims',
  templateUrl: './clims.component.html',
  styleUrls: ['./clims.component.scss']
})
export class ClimsComponent implements OnInit {
  isLinear=false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  dataSource: any[] = [];

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      'medicare':[''],
      'patientName':[''],
      'patientDOB':[''],
      'sex':[''],
      'patientAddress':[''],
      'state':[''],
      'zipCode':[''],
      'telePhone':[''],
     
     


      'city': ['']
      // firstCtrl : ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      'insuredId':[''],
      'insuredName':[''],
      'patientRelation':[''],
      'insuredAddress':[''],
      'citi':[''],
      'otherInsuredPolicy':[''],
      'otherInsuredName':[''],
      'otherInsuredLastName':[''],
      'reservedForNUCC':[''],
      'insuredPlanName':[''],
      'isPatient':[''],
      'autoAccident':[''],
      'otherAccident':[''],
      'reservedForLocal':[''],
      'insuredPolicyGroup':[''],
      'insuredDOB':[''],
      'otherClaim':[''],
      'claimCodes':[''],
      'state':[''],
      'zipCode':[''],
      'sex':[''],
      'anotherHealthBenefit':['']
      // secondCtrl : ['', Validators.required]
  });
    this.thirdFormGroup = this.formBuilder.group({
      'nameOfReferring':[''],
      'npi':[''],
      'dateOfCurrentillness':[''],
      'quality':[''],
      'otherDate':[''],
      'fromDate':[''],
      'toDate':[''],
      'additionalClaim':[''],
      'outside':[''],
      'charge':[''],
      'icdId':[''],
      'a':[''],
      'b':[''],
      'c':[''],
      'd':[''],
      'e':[''],
      'f':[''],
      'g':[''],
      'h':[''],
      'i':[''],
      'j':[''],
      'k':[''],
      'l':[''],
     'resubmission':[''],
     'orginalRef':[''],
     'prior':[''],
     'federal':[''],
     'ssin':[''],
     'patientAcc':[''],
     'totalCharge':[''],
     'amountPaid':[''],
     'balanceDue':[''],
     'serviceFacility':[''],
     'billingProvider':[''],
      // thirdCtrl : ['', Validators.required]
});

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLineItemComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result); 
      }         
    });
  }
}
