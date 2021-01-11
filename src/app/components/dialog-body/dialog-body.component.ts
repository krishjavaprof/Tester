import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  public message;
  constructor(private matDialog: MatDialog,public dialogRef: MatDialogRef<DialogBodyComponent>,  @Inject(MAT_DIALOG_DATA) public passeedData: any) {
 
   }

  ngOnInit(): void {
    if (this.passeedData) {
      this.message = this.passeedData;
    } else {
      this.message = 'Registration Sucessfull';
    }  
  }
  close() {
    this.dialogRef.close();
  }
}
