import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-team-app';

  name = 'Angular 4';
  public date:Date;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;
  public timeString:string;

  isTwelveHrFormat:false;
  test:any;
  constructor(){

    setInterval(() =>{
   const currentDate = new Date();
   this.date = currentDate;
   this.timeString = this.date.toLocaleTimeString();
    }, 1000);
  }
}
