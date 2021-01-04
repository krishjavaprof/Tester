import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { Personal } from 'src/app/models/personal.model';
import { PatientUser } from 'src/app/models/patient.model';
import { Insurance } from 'src/app/models/insurance.model';
import { first } from 'rxjs/operators';
import { DialogBodyComponent } from '../../components/dialog-body/dialog-body.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  alert:boolean=false
  selected = 'Patient';
  formGroup: FormGroup;
  post: any = '';
  constructor(private formBuilder: FormBuilder,private userService: UserService,private matDialog: MatDialog) { }
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  county: string[] = [
    'Autauga', 'Baldwin', 'Barbour', 'Bibb', 'Blount', 'Bullock', 'Butler', 'Calhoun',
    'Chambers', 'Cherokee', 'Chilton', 'Choctaw'
  ];
 

  ngOnInit() {
    this.createForm();
  
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      
      'emailId':['', [Validators.required]],
        'insuredId':['' ,[Validators.required]],
        'firstName': ['', [Validators.required]],
        'middleName': ['' ],
        'lastName': ['', [Validators.required]],
        'dob': [''],
        'mobile': ['', [Validators.required]],
        'gender': ['',[Validators.required]],
        'address': [''],
        'city': [''],
        'state': [''],
        'county': [''],
        'zipCode': [''],
        'alternateNumber': [''],
        'mobileNumber': [''],
        'policyGroupFeca':[''],
        'employerNameSchool':[''],
        'otherBenefitPlan':[''],
        'patientId':[''],
        'patientStatus':[''],
        'patientRelation':[''],
        'healthBenefit':['']
        



        

       })
    //  'emailId': ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
        
      
    
  }
  getErrorEmail() {
    if(this.formGroup.get('emailId').hasError('pattern')){
      console.log("pattern");
      return ('Email must be a valid email address');
    }
    if(this.formGroup.get('emailId').hasError('required')){
      console.log("req");
      return ('Email is required');
    }
    if( this.formGroup.get('emailId').hasError('alreadyInUse')){
      console.log("alredy");
      return( 'This emailaddress is already in use')
    }
    return ''  
  }
  getErrorMobile(){
    if(this.formGroup.get('mobile').hasError('required')){
      console.log("req");
      return ('Mobile Number is required');
    }
    return ''
  }
  getErrorFisrtName(){
    if(this.formGroup.get('firstName').hasError('required')){
      console.log("req");
      return ('First Name is required');
    }
    return ''
  }
  getErrorLastName(){
    if(this.formGroup.get('lastName').hasError('required')){
      console.log("req");
      return ('Last Name is required');
    }
    return ''
  }
  getErrorGender(){
    if(this.formGroup.get('gender').hasError('required')){
      console.log("req");
      return ('Please Select Gender');
    }
    return ''
  }
  getErrorInsureId(){
    if(this.formGroup.get('insuredId').hasError('required')){
      console.log("req");
      return ('Insurance ID is required');
    }
    return ''
  }
  regUser: User;
  patientUser: PatientUser;

  //personal: Personal
  onSubmit(post) {
    this.post = post;
   console.log(this.formGroup.value);
   if (this.formGroup.invalid) {
    console.log("IN INAVLID")
      return;
  }
  this.regUser=this.formGroup.value;
 // this.patientUser = this.formGroup.value;
  var patient = new PatientUser();
 patient.emailId = this.formGroup.controls.emailId.value;
 patient.patientId = this.formGroup.controls.patientId.value;
  patient.insurance = this.formGroup.controls.insuredId.value;
  patient.patientRelationship = this.formGroup.controls.patientRelation.value;
  patient.patientStatus = this.formGroup.controls.patientStatus.value;
 //patient.user = this.formGroup.controls.user.value;
  

   var insurance = new Insurance();
   insurance.insuranceId= this.formGroup.controls.insuredId.value;
   insurance.policyGroupFeca= this.formGroup.controls.policyGroupFeca.value;
   insurance.employerNameSchool= this.formGroup.controls.employerNameSchool.value;
   insurance.otherBenefitPlan= this.formGroup.controls.otherBenefitPlan.value;
   patient.insurance=insurance;
   this.patientUser = patient;
  // this.regUser.patient=patient;
   this.regUser.userType='Patient';
   this.regUser.patient = patient;
   var personal=new Personal()
   
   personal.emailId= this.formGroup.controls.emailId.value;
   personal.insuranceId= this.formGroup.controls.insuredId.value;
   personal.firstName= this.formGroup.controls.firstName.value;
   personal.lastName= this.formGroup.controls.lastName.value;
   personal.middleName= this.formGroup.controls.middleName.value;
   personal.dob= this.formGroup.controls.dob.value;
   personal.mobileNumber= this.formGroup.controls.mobileNumber.value;
   personal.gender= this.formGroup.controls.gender.value;
   personal.address= this.formGroup.controls.address.value;
   personal.city= this.formGroup.controls.city.value;
   personal.state= this.formGroup.controls.state.value;
   personal.county= this.formGroup.controls.county.value;
   personal.zipCode= this.formGroup.controls.zipCode.value;
   personal.alternateNumber= this.formGroup.controls.alternateNumber.value;
   this.regUser.personal=personal;

   console.log("USER Strinfy "+JSON.stringify(this.regUser))
   //this.loading = true;
   this.userService.createUser(this.regUser)
       .pipe(first())
       .subscribe(
           data => {
              // this.userService.createUser.success('Registration successful', true);
               //this.router.navigate(['/loginUser']);
               console.log("Success "+JSON.stringify(data));
               this.matDialog.open(DialogBodyComponent);
              //  this.alert=true
               this.formGroup.reset({})
           },
           
           error => {
               //this.userService.error(error);
              // this.loading = false;
              
              console.log( "failure ");
              this.alert=false
           });
           
   


}
}
