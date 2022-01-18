"# ts-cypress" 
 VS Studio plugins 
 - typescript
 - Code Runner

 Page Object Model (POM) design pattern implemented
 
 environment init
 npm init -y
 npm install cypress@6.5.0
 npm install typescript
//initialize a new tsconfig.json file using command
 npx tsc --init --types cypress --lib dom,es6
 npx cypress open
npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator

 npm install mochawesome
 npm install mochawesome-report-generator
 npm install mochawesome-merge
 npm install rimraf // rm - rf command eqivalent
 npx cypress run --help // run with parameters
 npx cypress run --reporter mochawesome

 bad command can generate Unexpected token � in JSON at position 0
 //npx mochawesome-merge cypress/reports/*.json ＞ cypress/output.json

good command
npx mochawesome-merge cypress/reports/*.json | out-file -encoding ascii cypress/output.json

Step 6 - Run command to generate html report
//npx marge cypress/report/output.json --reportDir ./ --inline
npx marge cypress/output.json --reportDir ./reports --inline

Add report generation commands
in package.json scripts
pretest
test
posttest