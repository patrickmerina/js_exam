# JsTechExam

Technical Interview Exam - Mini Shopping Cart | John Patrick Merina

To clone:
git clone https://github.com/patrickmerina/js_exam.git

Setup/run instructions

1. Install the dependencies
   a. Install latest NodeJS https://nodejs.org/en/download
   b. npm i install -g typescript
   c. npm install -g @angular/cli
   d. npm install -g json-server
   note: you can remove -g if you intent to only use angular in the current folder.

To fetch the product list from the mock API:
npm run start:json-server

2. Features implemented
   *Angular version 19.2.11
   *Add to cart feature
   *Quantity adjustment
   *Item Removal
   *Discount Application
   *Subtotals per item and total items
   *Mock API from local JSON file through json-server
   *Bootstrap 5

3. Any assumptions made
   a. Latest NodeJS Installed
   b. VSCode Extensions
   c. ESLint
   d. Angular Language Service
   e. Prettier
   f. HTML CSS Support
   g. SonarQube for IDE
   h. You have Gitbash as terminal for your VSCode
   i. Resolution = 1920 x 1080

4. Time Spent - 44 hours in total

=======================================================================================================

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
