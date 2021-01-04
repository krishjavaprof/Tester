import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DialogBodyComponent } from '../../components/dialog-body/dialog-body.component';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { first } from 'rxjs/operators';
import { Personal } from 'src/app/models/personal.model';

import { ValidatorService } from '../../services/validator.service'
import { UserStateService } from 'src/app/services/user-state.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers:[UserService],
})
export class PasswordComponent implements OnInit {
  alert:boolean=false
  minPw = 8;
  post: any = '';
  formGroup: FormGroup;
    oldPassword: FormControl;
    newPassword: FormControl;
    confirmPassword: FormControl;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private validatorService: ValidatorService,private matDialog: MatDialog, private userState: UserStateService) { }
  ngOnInit(): void {
    this.oldPassword = new FormControl('', [Validators.required]);
    this.newPassword = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]);
    this.confirmPassword = new FormControl('', [Validators.required, this.validatorService.MustMatch(this.newPassword)]);
   
    this.formGroup = this.formBuilder.group({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
        'emailId':['',],
        
    });
}
    
getErrorOldPassword(){
  if(this.formGroup.get('oldPassword').hasError('required')){
    console.log("req");
    return ('Old Password is required');
  }
  return ''
}
getErrorNewPassword(){
  if(this.formGroup.get('newPassword').hasError('required')){
    console.log("req");
    return ('New Password is required');
  }else if(this.formGroup.get('newPassword').hasError('maxlength')){
  return('Only 15 characters allowed for password.');
}else if(this.formGroup.get('newPassword').hasError('minlength')){
  return('Atleast 8 characters needed for password');

}
return ''
}

getErrorConfirmPassword(){
  if(this.formGroup.get('confirmPassword').hasError('required')){
    console.log("req");
    return ('Confirm Password is required');
  }else if(this.formGroup.get('confirmPassword').hasError('mustMatch')){
  return('Confirm Password Must Match.');
}


return ''

}


  
  
  regUser: User;
  onSubmit(post) {
    this.post = post;
   console.log(this.formGroup.value);
   console.log("post",this.post);
   if (this.formGroup.invalid) {
    console.log("IN INAVLID")
      return;
  }
  this.regUser=this.formGroup.value;
 var personal=new Personal()
   
  //  personal.emailId= this.formGroup.controls.emailId.value;
  //  personal.insuranceId= this.formGroup.controls.insuranceId.value;
  //  personal.firstName= this.formGroup.controls.firstName.value;
  //  personal.lastName= this.formGroup.controls.lastName.value;
  //  personal.middleName= this.formGroup.controls.middleName.value;
  //  personal.dob= this.formGroup.controls.dob.value;
  //  personal.mobileNumber= this.formGroup.controls.mobileNumber.value;
  //  personal.gender= this.formGroup.controls.gender.value;
  //  personal.address= this.formGroup.controls.address.value;
  //  personal.city= this.formGroup.controls.city.value;
  //  personal.state= this.formGroup.controls.state.value;
  //  personal.county= this.formGroup.controls.county.value;
  //  personal.zipCode= this.formGroup.controls.zipCode.value;
  //  personal.alternateNumber= this.formGroup.controls.alternateNumber.value;
  //  this.regUser.userType='';



// this.regUser.personal=personal;
//   this.userService.changePassword(this.regUser)
 
//   .pipe(first())
//   .subscribe(
    
//       data => {
//         alert("i am inside"+data);
         
//           if (data) {
//             let userDetails = this.formGroup.value;
      const body = {
        emailId:this.userState.getUserInfo().emailId,
        password:this.formGroup.controls.oldPassword.value,
        lastPwdChgDate: new Date(),
        newPassword: this.formGroup.controls.newPassword.value
            } 
     
        this.userService.changePassword(body).subscribe(
                (data) => {
                  console.log("Success "+JSON.stringify(data));
                  this.matDialog.open(DialogBodyComponent);
                 //  this.alert=true
                  this.formGroup.reset({})
                },
                (error) => {console.log( "failure ");
                this.alert=false
            
        });
    
         
     

}

  //     });
  //   }
  }
