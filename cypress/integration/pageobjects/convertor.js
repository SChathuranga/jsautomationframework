var inputfile = 'C:\\Users\\l.wijenayake\\OneDrive - Sana Commerce\\Automation  Others\\Cypress_Workplace\\cypress\\integration\\pageobjects\\loginpage.yml',
    outputfile = 'C:\\Users\\l.wijenayake\\OneDrive - Sana Commerce\\Automation  Others\\Cypress_Workplace\\cypress\\integration\\pageobjects\\output1.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
// this code if you want to save
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));