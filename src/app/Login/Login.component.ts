import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  public formNotFilledIn: boolean = true;
  public myInput: string;

  constructor() { }

  ngOnInit() {
  }

  myMethod(){
    // this.router.navigate(['/login'])
    //     .catch(err => console.error('ERROR', 'Could not navigate to home.', err));
  }

  onChangeMethod(){
    this.formNotFilledIn = false;
  }

}
