var express = require('express');
var app = express();
app.get('/', function (req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'sa',
        password: 'BVC12345',
        server: 'DANY_PC\\SQLEXPRESS',
        //database: 'AP'
        database: 'Eval',
        options: {
            encrypt: true,
            enableArithAbort: true
        }
    };
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        //request.query('select top 4 * from dbo.Vendors', function (err, recordset) {
        request.query('select * from dbo.Users', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            res.send(recordset);
        });
    });
});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});

//node apps.js