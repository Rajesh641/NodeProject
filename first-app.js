var fs = require('fs');

fs.readFile('Valid.json',
    function (err, data) {

        if (err) throw err;
        var jsondata = JSON.parse(data);

        console.log('Data is ' + jsondata.problems[0].Diabetes[0]
        .medications[0].medicationsClasses[0]
        .className[0].associatedDrug[0].name);
    })

