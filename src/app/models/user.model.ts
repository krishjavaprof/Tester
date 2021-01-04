import { Personal } from './personal.model';



export class User {
    emailId: string;
    password: string;
    userType: string;
    registrationDate: Date;
    lastPwdChgDate: Date;
    personal:Personal;
    patient:PatientUser
    provider:Provider
    
}

export class LoginUser {
    emailId: string;
    password: string;
   
} 

export class loggedInUseInfo {
    public emailId: string;
}
 
 export class PatientUser {
    emailId: string;
     patientId:String;
    patientRelationship: string;
     insurance:Insurance;
     user: User
    
}
 export class Insurance{
    insuranceId:string;
     policyGroupFeca:string
     employerNameSchool: string
     otherBenefitPlan:string
    patient : PatientUser
}
export class Provider{
   
    providerId: string;
    emailId: string;
    npi:String;
}
