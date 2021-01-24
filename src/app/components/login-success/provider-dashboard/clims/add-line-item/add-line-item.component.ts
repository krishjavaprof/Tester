import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-line-item',
  templateUrl: './add-line-item.component.html',
  styleUrls: ['./add-line-item.component.scss']
})
export class AddLineItemComponent implements OnInit {
    claimsFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,  public dialogRef: MatDialogRef<AddLineItemComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any){}

    public ngOnInit() {
        this.claimsFormGroup = this.formBuilder.group({
            'DateofServiceFrom':[''],
            'DateofServicTo':[''],
            'ReferringProvider':[''],
            'EMG':[''],
            'ProceduresServicesSupplies':[''],
            'suppliesMofifier':[''],
            'DiagnosisPointer':[''],
            'Charges':[''],
            'DaysorUnits':[''],
            'EPSDTFamilyPlan':[''],
            'IDQual':[''],
            'RenderingProviderID':[''],
            'NPI':[''],
          
          });
    }

    public save(): void {
        const body = {
            DateofServiceFrom: this.getDateValue('DateofServiceFrom'),
            DateofServicTo: this.getDateValue('DateofServicTo'),
            ReferringProvider: this.getValue('ReferringProvider'),
            EMG: this.getValue('EMG'),
            ProceduresServicesSupplies: this.getValue('ProceduresServicesSupplies'),
            suppliesMofifier: this.getValue('suppliesMofifier'),
            DiagnosisPointer: this.getValue('DiagnosisPointer'),
            Charges: this.getValue('Charges'),
            DaysorUnits: this.getValue('DaysorUnits'),
            EPSDTFamilyPlan: this.getValue('EPSDTFamilyPlan'),
            IDQual: this.getValue('IDQual'),
            RenderingProviderID: this.getValue('RenderingProviderID'),
            NPI: this.getValue('NPI')
        }
        this.dialogRef.close(body);
    }
    public cancel(): void {
        this.dialogRef.close();
    }

    private getValue(formControlName: string): any {
        return this.claimsFormGroup.controls[formControlName].value;
    }

    private getDateValue(formControlName: string): any {
        if (this.getValue(formControlName)) {
            const d = new Date(this.getValue(formControlName));
            const datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
            return datestring;
        }
        return '';        
    }

}