import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable }    from 'rxjs/Observable';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { LoginUser } from 'src/app/models/user.model';
import { UserStateService} from '../../services/user-state.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  formGroup: FormGroup;
  post: any = '';
  invalidLogin = false
  constructor(private formBuilder: FormBuilder,private userService: UserService, 
    private userstate: UserStateService,private loginservice: AuthenticationService,private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'emailId': ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        
      'password': ['', Validators.required],
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('emailId').hasError('required')) {
          return 'Email required';
        }
        break;
        case 'user1':
          if (this.formGroup.get('emailId').hasError('required')) {
            return ' Email must be a valid email address';
          }
          break;
       
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
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
  

  
  onSubmit(post) {
    this.post = post;
    console.log(this.formGroup.value);
   //this.submitted = true;
   

   // stop here if form is invalid
   if (this.formGroup.invalid) {
     console.log("IN INAVLID")
       return;
   }

   var loginUser=new LoginUser();
   loginUser=this.formGroup.value;
 
 
   
//  loginUser.emailId= this.formGroup.controls.emailId.value;
//  loginUser.password= this.formGroup.controls.password.value;




console.log("USER Strinfy "+JSON.stringify(loginUser))
   //this.loading = true;
   this.userService.loginUser(loginUser)
       .pipe(first())
       .subscribe(
           data => {
             this.userstate.setUserInfo(this.formGroup.controls.emailId.value, 'emailId');

              // this.userService.createUser.success('Registration successful', true);
               //this.router.navigate(['/loginUser']);
               console.log("Success "+JSON.stringify(data));
              
           },
           error => {
               //this.userService.error(error);
              // this.loading = false;
              console.log( "failure ");
           });
}
checkLogin() {
   this.userstate.setUserInfo(this.formGroup.controls.emailId.value, 'emailId');
  (this.loginservice.authenticate(this.formGroup.controls.emailId.value, this.formGroup.controls.password.value).subscribe(
    data => {
      this.router.navigate([''])
      this.invalidLogin = false
      this.router.navigateByUrl('/user');
    },
    error => {
      this.invalidLogin = true

    }
  )
  );

}
  

}


 
   
