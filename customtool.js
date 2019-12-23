var inputfile = 'cypress/support/keys.yml',
    outputfile = 'cypress/support/keys.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'cypress/pageobjects/adminPages.yml',
    outputfile = 'cypress/pageobjects/adminPages.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'cypress/pageobjects/controls.yml',
    outputfile = 'cypress/pageobjects/controls.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'cypress/pageobjects/flexiPage.yml',
    outputfile = 'cypress/pageobjects/flexiPage.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'cypress/testdata/testdata.yml',
    outputfile = 'cypress/testdata/testdata.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

