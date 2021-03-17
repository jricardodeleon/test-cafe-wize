##  dependencies
# test-cafe-wize
Install testcafe.
npm install test cafe

# install reporter
npm install testcafe-reporter-list

# data protection
npm install dotenv

## how to run the program
Inside the package.json in the scripts module there are diferent ways to run the test suite.

1. test:chrome, runs all the scripts in chrome browser plus reporter.
2. test:chrome:5, runs all the scripts in multiple chrome instances plus reporter.
3. test:safari, runs all the scripts in safari browser plus reporter.
4. test:multiple, runs all the scripts in chrome and safari browsers in parallalel  plus reporter.

## sections

1. Pages, contains all selectors and methods to implement in the test.
2. Roles, contains all roles that may be implement in the test.
3. test, contains all tests that may be run.
4. .env, contains all the data used in the suite.
5. data, contains all the data parameters that ids used in the suite.
6. package.json contains all the environment used in the suite.