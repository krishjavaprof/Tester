import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage1:string = "assests/images/loginbg.png";
  myimage2:string = "assests/images/nurse-measuring-patient-blood-pressure.jpg";
}
