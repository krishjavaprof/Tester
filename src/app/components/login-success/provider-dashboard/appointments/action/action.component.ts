import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'app-action-appointments',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

    @Input()
    public actionElement: any;

    @Output()
    public actionComplted = new EventEmitter<any>();

    public message: string;

    constructor(){}

    public ngOnInit() {
      if (this.actionElement.actionType === 'accept') {
        this.message = "Are you shure you want to accept the appointment";
      }              

    }

    public actionOk(): void {
        this.actionElement.status = 'accept';
        this.actionElement.openActionItem = false;
        this.actionComplted.emit(this.actionElement);
    }
    public cancel(): void {
      this.actionElement.openActionItem = false;
      this.actionComplted.emit(this.actionElement);
    }
}