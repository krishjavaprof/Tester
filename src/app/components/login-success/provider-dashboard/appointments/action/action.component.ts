import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'app-action-appointments',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

    @Input()
    public actionType: string;

    @Output()
    public actionComplted = new EventEmitter<Boolean>();

    constructor(){}

    public ngOnInit() {
        

    }

    public actionOk(): void {
        this.actionComplted.emit(true);
    }
}