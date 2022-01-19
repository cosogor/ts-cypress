## VS Studio plugins 
 - typescript
 - Code Runner

 ## Page Object Model (POM) design pattern implemented
 


## Useful commands
     environment init
     npm init -y
     npm install cypress@6.5.0
     npm install typescript //initialize a new tsconfig.json file using command
     npx tsc --init --types cypress --lib dom,es6
     npx cypress open
     npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator
     npm install mochawesome-merge --save-dev
     npm install mochawesome
     npm install mochawesome-report-generator
     npm install mochawesome-merge
     npm install rimraf // rm - rf command eqivalent
     npx cypress run --help // run with parameters
     npx cypress run --reporter mochawesome

## Bad merge command can generate Unexpected token � in JSON at position 0
     npx mochawesome-merge cypress/reports/*.json ＞ cypress/output.json

## Good merge command but do not works from windows console (error occures)
    npx mochawesome-merge cypress/reports/*.json | out-file -encoding ascii cypress/output.json

## Best merge command works from windows console 
    npx mochawesome-merge cypress/reports/*.json  -encoding ascii > output.json

## Run command to generate html report
    npx marge cypress/output.json --reportDir ./reports --inline

## Add report generation commands in package.json scripts

- pretest
- test
- posttest
## Commands runs from nmp run test
    "pretest": "rimraf -r ./cypress/*.json", // = "rm -r ./cypress/*.json" // delete old report file
    "test": "npm run cypress-test || npm run posttest", //  run tests || = independently of resilts of previous command
    "cypress-test": "cypress run --reporter mochawesome", // run cypress  with reporter mpchawesome
    "posttest": "npm run merge-reports && npm run generate-html-reports", // merge json reports  and generate html report
    "merge-reports": "mochawesome-merge cypress/reports/*.json  -encoding ascii > output.json", // generate html report
    "generate-html-reports": "marge output.json --reportDir cypress/reports"
## How to run
    npm run test // for perform all scripts
    npm run merge-reports // for rerun merge reports
    npm run generate-html-reports // rerun html report generation
## How to cionfigure cypress.json
    {
        "waitForFileChanges": true, // rerun tests after testfila change
        "reporter": "mocawesome", // using reporter mocawesome
        "reporterOptions":{
            "charts": true,
            "overwrite": false,
            "html": false,  // do not generate html to future json merge
            "json": true,   // but generate json to future json merge
            "reportDir": "cypress/reports" // report dir to json files
        }
    }
