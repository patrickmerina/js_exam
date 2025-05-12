# JsTechExam

Technical Interview Exam - Mini Shopping Cart | John Patrick Merina

Setup/run instructions

## A. Installing dependencies:

   1. Install latest NodeJS https://nodejs.org/en/download
   2. ```$ npm install -g typescript```
   3. ```$ npm install -g @angular/cli```
   4. ```$ npm install -g json-server```
   note: you can remove -g if you intent to only use angular in the current folder.

## Development server

To clone:
```bash
git clone https://github.com/patrickmerina/js_exam.git
```

After cloning and installing dependencies, install the package by running: 

```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

To run the JSON server for the mock API:
```bash
npm run start:json-server
```


## B. Features
   * Angular version 19.2.11
   * Add to cart feature
   * Quantity adjustment
   * Item Removal
   * Discount Application
   * Subtotals per item and total items
   * Mock API from local JSON file through json-server
   * Bootstrap 5


## C. Assumptions
   * Latest NodeJS Installed
   * VSCode Extensions
   * ESLint
   * Angular Language Service
   * Prettier
   * HTML CSS Support
   * SonarQube for IDE
   * You have Gitbash as terminal for your VSCode
   * Resolution = 1920 x 1080


## D. Time Spent - 44 hours in total



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.



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


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
