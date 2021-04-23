/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';

import { NavbarComponent } from './Navbar.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule, FormsModule, ReactiveFormsModule
      ],
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a live clock", () => {
    let comp:NavbarComponent = new NavbarComponent();
    expect(comp.date.getHours()).toEqual(14); // last tested 2:04pm
  });

  it('should run /home', fakeAsync(() => {
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('/home');
  }));
  it('should run /survey', fakeAsync(() => {
    router.navigate(['survey']);
    tick();
    expect(location.path()).toBe('/survey');
  }));
  it('should run /signup', fakeAsync(() => {
    router.navigate(['signup']);
    tick();
    expect(location.path()).toBe('/signup');
  }));
  it('should run /login', fakeAsync(() => {
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }));
  it('should run /subscribe', fakeAsync(() => {
    router.navigate(['subscribe']);
    tick();
    expect(location.path()).toBe('/subscribe');
  }));

  it('should not run /badlink', fakeAsync(() => {
    router.navigate(['notfound']);
    tick();
    expect(location.path()).toBe('/notfound');
  }));
});
