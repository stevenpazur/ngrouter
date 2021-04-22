# Team Dipper II

Build a team web app where your development team can display information and samples of your work that visitors can browse. This app should include 3 Angular forms as well as basic routing.

## Learning Objectives 

Polish your current knowledge of Typescript and Angular components, and combine that with new knowledge of routes and forms. Your code should:

* Practice good naming
* Adhere to community [style guidelines](https://ts.dev/style/)
* Make good use of classes
* Have a structured, well-styled professional layout (focus on minimalist designs if you're not feeling very creative)
* Practice clean tests: make good use of test utilities and readability

## Instructions 

1. Fork [this repository]().
1. Share it with your team. 
1. Commit after every passing test (minimum).

You're encouraged to use Bootstrap to make layout and style easier and more beautiful. Your team should have a mascot which can be used as an icon throughout your app and as a graphic to display on any page.

* Must display team: title, bio, slogan, mascot and icon.
* Must have a live 12-hour clock on all pages.
* Must display examples of their CSS design work:
    - The Big Dipper constellation
* App should be responsive.

> There are many features in Angular Routing so focus on the basics, which is page navigation and route configuration. You shouldn't need any advanced routing features such as guards or activated routes to complete the basic app.


### Stories and Acceptance Tests 

Acceptance tests are feature restrictions to take into consideration when designing apps. Below are some simple stories and a description of tests the feature must pass.

**App**
As a user, I can browse the app by visiting links and reading information on the home page.
- has title, navigation, a header, and footer
- has navigation links to home, login, signup and subscribe
- all components should load within this component when visiting a link.

**Subscription Form**
As a user, I can subscribe to newsletters.
- has a single input field email address
- has a submit button
- has validation for valid email addresses

**Signup Form**
As a user, I can create an account so that I can revisit the app.
- has fields for first name, last name, email, password and password confirmation
- has a submit button
- submit button is disabled if the form isn't properly filled out
- has validation for all fields. Passwords must be at least 6 characters.

**Login Form**
As a registered user, I can use my credentials to login to my account.
- has fields for email and password
- has a submit button
- submit button is disabled if the form isn't properly filled out
- has validation for all fields.

**Survey Form**
As a user, I can complete surveys to share my opinions.

The survey has the following prompts and options:

- Token: hidden text field with value 'securityToken'
- City: text field
- State: text field with 2 character limit
- Birthday: date field
- Expertise: radio button with options - novice, journeyman, master
- Preferences: checkboxes with options - coffee, hotdogs, liver, shrimp, sour milk
- Contact: drop down with options - morning, afternoon, evening
- Website: text field for URLs only 
- About: textarea field 

## Hints and Tips 

* There are slightly more components than you probably think there should be.
* You don't need services.
* You don't need data persistence (ex.: you don't need to save logins, etc)


### Resources

- [Hipster Ipsum](https://hipsum.co/)
- [Bootstrap Framework](https://getbootstrap.com/)

