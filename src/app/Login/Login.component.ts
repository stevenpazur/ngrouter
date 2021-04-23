import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {

  public formNotFilledIn: boolean = true;
  public myInput: string;

  constructor() { }

  onChangeMethod(){
    this.formNotFilledIn = false;
  }

}
