import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myMethod(){
    // this.router.navigate(['/home'])
    //     .catch(err => console.error('ERROR', 'Could not navigate to home.', err));
  }

}
