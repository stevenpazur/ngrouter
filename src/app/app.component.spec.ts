import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture;
  let app;
  let compiled;
  beforeEach(async () => {
    // fixture.detectChanges();
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-team-app'`, () => {
    expect(app.title).toEqual('ng-team-app');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ng-team-app app is running!');
  // });

  it("should render team logo", () => {
    expect(compiled.querySelector('#teamLogo')).toBeDefined();
  })
  it("should render team mascot", () => {
    expect(compiled.querySelector('#teamMascot')).toBeDefined();
  })
  it("should render team slogan", () => {
    expect(compiled.querySelector('#teamSlogan')).toBeDefined();
  })
  it("should render team bios", () => {
    expect(compiled.querySelector('#bioPedro')).toBeDefined();
    expect(compiled.querySelector('#bioSteven')).toBeDefined();
  })
  it("should render team name", () => {
    expect(compiled.querySelector('#teamName')).toBeDefined();
  })

  it("should have a live clock", () => {
    expect(compiled.querySelector('.clock2')).toBeDefined();
  })
});
