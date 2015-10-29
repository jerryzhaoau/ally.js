---
layout: doc-page.html
---

# Test Infrastructure

The tests are built on top of [The Intern](https://theintern.github.io/). See the [tutorial](https://github.com/theintern/intern-tutorial) and [some examples](https://github.com/theintern/intern-examples) to get started. Also see [Chai BDD](http://chaijs.com/api/bdd/) for asserting stuff and [leadfoot](http://theintern.github.io/leadfoot/) for interacting with browsers.

* **NOTE:** Unlike ally.js, the tests are not written in ES6, but follow Intern's ES5 and AMD scheme.

The test infrastructure is located in the `test` directory. Note that the `tests` directory is occupied by manual browser support tests.

Intern handles both unit and functional tests. Unit tests are the ones that verify a function's integrity without user interaction (like clicking on things or pressing keys). Functional tests are the ones that use [leadfoot](http://theintern.github.io/leadfoot/) to simulate a human being using the browser. Both types of tests are executed in the browser, there is no point testing things in Node.

For local development the command `npm run test` can be used to spawn an instance of ChromeDriver interfacing with Google Chrome and automatically executing the tests setup defined in `test/local.js`. To run tests against a whole battery of browsers in the cloud we use [BrowserStack](http://browserstack.com) and [SauceLabs](https://saucelabs.com). To run those locally, you'll need the secret access keys (which you'll only get if you're a core contributor, sorry). The results of all tests executed on SauceLab's infrastructure are [made public](https://saucelabs.com/u/allyjs).

Coverage reports are made available in the directory `reports/coverage`.

> TODO: The tests should be run automatically via [TravisCI](https://theintern.github.io/intern/#ci-travis)


## Locally Running Unit Tests In The Browser

You can run the unit tests in any browser by navigating to the following URL:

```text
http://{{your-host}}/{{path-to}}/ally.js/node_modules/intern/client.html?config=test/browser
```

(we're not using `test/sauce` or `test/local` in the browser because of the `reporters` those configurations load)


## Locally Running All Tests In The Browser

Both unit and functional tests can be executed in Google Chrome locally via `npm run test` or `node test/run-local.js`. You could also [install and start ChromeDriver yourself](https://theintern.github.io/intern/#local-selenium) and then run `./node_modules/.bin/intern-runner config=test/local`. The `test/run-local.js` uses [dalek-driver-chrome](https://github.com/dalekjs/dalek-driver-chrome) to download, install and start ChromeDriver automatically.

```sh
# run all tests locally in Google Chrome
npm run test

# run all tests locally in Google Chrome (without npm)
node test/run-local.js

# run selected suites in Google Chrome
node test/run-local.js \
  suites=test/unit/selected-test \
  functionalSuites=tests/functional/selected-test
```


## Remotely Running All Tests In All Browsers

You can register your own SauceLabs account (there is a [free tier](https://saucelabs.com/signup/plan/free)) and provide your own credentials if you don't have access to the project's account. The same is true for [BrowserStack](http://browserstack.com/).

```sh
# make BrowserStack credentials available to Intern
# obtainable at https://www.browserstack.com/accounts/automate
export BROWSERSTACK_USERNAME=rodneyrehm1
export BROWSERSTACK_ACCESS_KEY=nope
# make SauceLabs credentials available to Intern
# obtainable at https://saucelabs.com/account
export SAUCE_USERNAME=allyjs
export SAUCE_ACCESS_KEY=nope

# run all tests
npm run test-browserstack
npm run test-sauce

# run all tests (without npm)
./node_modules/.bin/intern-runner \
  config=test/browserstack
./node_modules/.bin/intern-runner \
  config=test/sauce

# run selected suites
./node_modules/.bin/intern-runner \
  config=test/browserstack \
  suites=test/unit/selected-test \
  functionalSuites=tests/functional/selected-test
./node_modules/.bin/intern-runner \
  config=test/sauce \
  suites=test/unit/selected-test \
  functionalSuites=tests/functional/selected-test
```