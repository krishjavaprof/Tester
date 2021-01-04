import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(private matDialog: MatDialog,public dialogRef: MatDialogRef<DialogBodyComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
}
