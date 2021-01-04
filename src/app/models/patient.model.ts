import { Insurance } from './insurance.model';
import { User } from './user.model';

export class PatientUser {
    emailId: string;
    patientId:String;
    patientRelationship: string;
    patientStatus: string;
    insurance:Insurance;
     user: User
    
}