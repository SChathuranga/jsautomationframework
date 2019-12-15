var inputfile = 'loginpage.yml',
    outputfile = 'output.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

var SexyYamlType = new jsyaml.Type('!sexy', {
    kind: 'sequence',
    construct: function (data) {
        return data.map(function (string) { return 'sexy ' + string; });
    }
});

var SEXY_SCHEMA = jsyaml.Schema.create([ SexyYamlType ]);
result = jsyaml.load(yourData, { schema: SEXY_SCHEMA });