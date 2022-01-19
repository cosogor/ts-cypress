dir
npx cypress run --reporter mochawesome
dir
# mkdir reports
# npx mochawesome-merge cypress/reports/*.json | out-file -encoding ascii output.json
npx mochawesome-merge cypress/reports/*.json  -encoding ascii > output.json
dir
npx marge output.json --reportDir cypress/reports/ --inline
