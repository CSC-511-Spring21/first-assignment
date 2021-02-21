# date-app

This assignment required creating an Ember project that display the current local date/time, and the date/time in a city in another timezone. It has a button to refresh the times.

I created a project using @glimmer/tracking and @ember/object to dymanically update the date/time displays.

Since the project was based on date and time, I used the Momentjs javascript library (https://momentjs.com/), to simplify formatting and calcuating time difference. I installed it using:

npm install moment --save

I imported it by adding to ember-cli-build.js:

app.import('node_modules/moment/moment.js');

And to prevent ESLint errors, I added to .eslintrc.js:

globals: {
    moment: true,
  }


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd date-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
