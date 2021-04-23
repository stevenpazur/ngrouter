import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent {
  public usernameNotFilledIn: boolean = true;
  public passwordNotFilledIn: boolean = true;
  public confirmNotFilledIn: boolean = true;
  public allNotFilledIn: boolean = true;

  public myInput: string;

  constructor() { }

  onChangeMethodUser() {
    this.usernameNotFilledIn = false;
    this.onChangeMethod();
  }

  onChangeMethodPass() {
    this.passwordNotFilledIn = false;
    this.onChangeMethod();
  }

  onChangeMethodConfirm(){
    this.confirmNotFilledIn = false;
    this.onChangeMethod();
  }

  onChangeMethod(){
    if(!this.usernameNotFilledIn && !this.passwordNotFilledIn && !this.confirmNotFilledIn){
      this.allNotFilledIn = false;
    }
  }
}
