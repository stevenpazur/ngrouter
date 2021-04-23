import { Component, OnInit } from '@angular/core';
import { SubscribeForm } from '../SubscribeForm';

@Component({
  selector: 'app-Subscribe',
  templateUrl: './Subscribe.component.html',
  styleUrls: ['./Subscribe.component.css']
})
export class SubscribeComponent {

  constructor() { }

  email = "";

  model = new SubscribeForm(this.email);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  diagnostic() {console.log(JSON.stringify(this.model));}

  formNotFilledOut = true;

  enable(){
    this.formNotFilledOut = false;
  }

}
