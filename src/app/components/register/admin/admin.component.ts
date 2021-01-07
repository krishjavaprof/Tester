import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { Personal } from 'src/app/models/personal.model';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../../../components/dialog-body/dialog-body.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  alert:boolean=false
  selected = 'Administrator';
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
      
      'emailId':['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        'insuranceId':['' ],
        'firstName': ['', [Validators.required]],
        'middleName': ['' ],
        'lastName': ['', [Validators.required]],
        'dob': [''],
        'mobile': ['', [Validators.required]],
        'gender': [''],
        'address': [''],
        'city': [''],
        'state': [''],
        'county': [''],
        'zipCode': [''],
        'alternateNumber': [''],
        'mobileNumber': ['']
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
  regUser: User;
  //personal: Personal
  onSubmit(post) {
    this.post = post;
   console.log(this.formGroup.value);
   //this.submitted = true;

   // stop here if form is invalid
   if (this.formGroup.invalid) {
     console.log("IN INAVLID")
       return;
   }
   this.regUser=this.formGroup.value;
 var personal=new Personal()
   
   personal.emailId= this.formGroup.controls.emailId.value;
   personal.insuranceId= this.formGroup.controls.insuranceId.value;
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
   this.regUser.userType='Admin';



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
