var inputfile = 'adminPages.yml',
    outputfile = 'adminPages.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'controls.yml',
    outputfile = 'controls.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var inputfile = 'flexiPage.yml',
    outputfile = 'flexiPage.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));