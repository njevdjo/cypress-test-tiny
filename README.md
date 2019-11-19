# Broke when async redirect

Examples

 - This can be login with ajax and redirect to home page .
 - In SPA app add new item with ajax and redirect to detail page.

 or use any async redirection.

Many SPA routers uses similar approach

# Run app on port 8080 and test

```
npm run start-app-and-test
```
```
npm run start-app-and-test-unsecure
```

# Manual run app on port 8080 and start tests

```
npm run start-app
```
```
npm run cypress:run
```
```
npm run cypress:run-unsecure
```
```
npm run cypress:open
```
```
npm run cypress:open-unsecure
```

## Current behavior:

When in app change hash location with delay (setTimeout) test will leave current page and go to parent page (cypress runner page). In my case http://localhost:8080/__/#/some/route/1

 - If set "chromeWebSecurity" to true, when run `cypress open` and select test get error "CypressError: Cypress detected a cross origin error happened on page load:..."

 - If set "chromeWebSecurity" to false, when run `cypress run` get error "Error: EISDIR: illegal operation on a directory, open 'C:\Users\fakeuser\AppData\Roaming\Cypress\cy\production\projects\cypress-playground-98c610aaf979570d4bd341aac2a02314\bundles'"

## Desired behavior:

When in app change hash location with delay (setTimeout) test will stay on current page. In my case http://localhost:8080/index.html#/some/route/1

Do not want to see any error.

## Versions

Cypress package version: 3.6.1

Cypress binary version: 3.6.1

Operating System: Windows10 64bit

Browser: Chrome 78

Electron: 73 (headless)


# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Description
:--- | :---
[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-tiny.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-tiny) | Linux & Mac
[![Build status](https://ci.appveyor.com/api/projects/status/er7wpte7j00fsm8d/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-test-tiny-fitqm/branch/master) | Windows 32-bit
[![Build status](https://ci.appveyor.com/api/projects/status/bpwo4jpue61xsbi5/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-test-tiny/branch/master) | Windows 64-bit
[ ![Codeship Status for cypress-io/cypress-test-tiny](https://app.codeship.com/projects/98843020-d6d6-0135-402d-5207bc7a4d86/status?branch=master)](https://app.codeship.com/projects/263289) | Codeship Basic

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.
