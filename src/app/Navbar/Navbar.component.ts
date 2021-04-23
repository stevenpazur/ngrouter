import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = 'Angular 4';
  date:Date;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;
  public timeString:string;

  isTwelveHrFormat:false;
  test:any;
  constructor(){

    this.date = new Date();
    this.hours = this.date.getHours();

    setInterval(() =>{
   const currentDate = new Date();
   this.date = currentDate;
   this.timeString = this.date.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
    this.date = new Date();
  }

  ButtonClicked(str){
    console.log(document.getElementById('notfound'));
    return window.location.href;
  }
}
