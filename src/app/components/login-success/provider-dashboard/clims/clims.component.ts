import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

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
  claimsFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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
this.claimsFormGroup = this.formBuilder.group({
  'DateofServiceFrom':[''],
  'DateofServicTo':[''],
  'ReferringProvider':[''],
  'EMG':[''],
  'ProceduresServicesSupplies':[''],
  // 'ProceduresServicesSupplies':[''],
  'DiagnosisPointer':[''],
  'Charges':[''],
  'DaysorUnits':[''],
  'EPSDTFamilyPlan':[''],
  'IDQual':[''],
  'RenderingProviderID':[''],
  'NPI':[''],

});
  }
}
